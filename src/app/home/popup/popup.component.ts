import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  private message: string;
  constructor(public dialogRef: MdDialogRef<PopupComponent>) {
      let mes = localStorage.getItem('message');
      this.message = JSON.parse(mes);
      localStorage.removeItem('message');
   }

}
