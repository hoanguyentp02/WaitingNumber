import { Ticket } from './../../models/ticket';
import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public ticket: Ticket = new Ticket();
  public store_id: String;
  public tag_id: String;
  public uuid: String;
  constructor(private router: Router, private ticketService: TicketService, private routeActive: ActivatedRoute) { 
    this.uuid = UUID.UUID();
    console.log("UUID: ",  this.uuid);
  }

  ngOnInit() {
    this.routeActive.params.subscribe( (params) => {
      this.store_id = params.store_id;
      this.tag_id = params.tag_id;
    })
  }

  submit() {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    // if (!EMAIL_REGEXP.test(this.ticket.contact.toString())) {
    //   alert("Invalid Email!")
    //   return;
    // }else{
    //   this.ticket.contact = this.ticket.contact.toString();
    //   this.ticket.store_id =  this.store_id;
    //   this.ticket.tag_id = this.tag_id;
    //   console.log(this.ticket)
    //   this.ticketService.getWaitingNumber(this.ticket).then((data) => {
    //     console.log(data)
    //     let result1 = {
    //       // "id": 937,
    //       // "storeId": "1234",
    //       // "tags": "0419AE5A422F81",
    //       // "timeTaken": 1524043748923,
    //       // "lastUpdate": 1524043748923,
    //       // "waitingNumber": 65,
    //       // "cusUUID": null,
    //       // "username": null,
    //       // "menu": null,
    //       // "number": 1,
    //       // "state": "NEW",
    //       // "note": "",
    //       // "checkinTime": null,
    //       // "intendedTime": null,
    //       // "noSessId": "SESS03",
    //       // "custId": 3,
    //       // "fcmtoken": ""
    //     }
    //     if (data.result == "") {
    //       alert(data.message)
    //     }else{
    //       localStorage.setItem('Ticket', JSON.stringify(data.result));
    //       this.router.navigate(["/wno-booking/detail"]);
    //     }
    //   }, (error) => {
    //     console.log("loi roi: ", error);
    //   })
    // }

    this.ticket.contact = this.ticket.contact.toString().trim();
      this.ticket.store_id =  this.store_id;
      this.ticket.tag_id = this.tag_id;
      console.log(this.ticket)
      this.ticketService.getWaitingNumber(this.ticket).then((data) => {
        console.log(data)
        let result1 = {
          // "id": 937,
          // "storeId": "1234",
          // "tags": "0419AE5A422F81",
          // "timeTaken": 1524043748923,
          // "lastUpdate": 1524043748923,
          // "waitingNumber": 65,
          // "cusUUID": null,
          // "username": null,
          // "menu": null,
          // "number": 1,
          // "state": "NEW",
          // "note": "",
          // "checkinTime": null,
          // "intendedTime": null,
          // "noSessId": "SESS03",
          // "custId": 3,
          // "fcmtoken": ""
        }
        if (data.result == "") {
          alert(data.message)
        }else{
          localStorage.setItem('Ticket', JSON.stringify(data.result));
          this.router.navigate(["/wno-booking/detail"]);
        }
      }, (error) => {
        console.log("loi roi: ", error);
      })
    
  }

}