import { AppSettings } from './../../../app.setting';
import { LocationStrategy } from '@angular/common';
import { TicketService } from './../../services/ticket.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ModalDirective } from 'ngx-bootstrap';
import { ModalService } from 'ng-bootstrap-modal';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  public ticket: any;
  private stompClient;
  private serverUrl = AppSettings.API_ENDPOINT + '/gs-guide-websocket';  
  public hideAll: Boolean = false;
  public listName: String = "";
  public success: boolean = false;
  public cancel: boolean = false;
  constructor(private ticketServices: TicketService, private router: Router, 
    private location: LocationStrategy) {

    let ticketTemp = localStorage.getItem('Ticket');
    this.ticket = JSON.parse(ticketTemp)
    console.log("ticket: ", this.ticket);
   }

  ngOnInit() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      let sub = '/topic/on_customer/' + that.ticket.number.id;
      that.stompClient.subscribe(sub, (message) => {
        let result = JSON.parse(message.body);
        let lstTable = result.result.tables
        console.log(lstTable)
        if (lstTable.length > 1) {
          for (let index = 0; index < lstTable.length; index++) {
            if (index == lstTable.length - 1) {
              that.listName = that.listName + lstTable[index].tableName;
            }else{
              that.listName = that.listName + lstTable[index].tableName + ', ';
            }
          }
        }else if (lstTable.length == 1) {
          that.listName = lstTable[0].tableName
        }else{}
        that.hideAll =  true;
        that.success  = true;
      }, (error) => {

      });
    }, (error) => {
      this.initializeWebSocketConnection()
    });
  }

  cancelBooking(){
    this.ticketServices.cancelBooking(this.ticket.number.id).then( (success) => {
      console.log("Thanh Cong", success)
      localStorage.removeItem('Ticket');
      this.hideAll =  true;
      this.cancel = true;
      // this.location.back();
    }, (error) => {
      console.log("Loi roi: ", error)
    })

    // this.confirmationService.create('', 'Are you sure?', this.settings)
    //     .subscribe((ans: ResolveEmit) => {
    //       if (ans.resolved == true) {
    //          console.log('accepted button clicked');
    //       } else {
    //         console.log('decline button clicked');
    //       }
    //     });
  }

}