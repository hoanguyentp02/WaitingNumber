import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { TicketService } from './../services/ticket.service';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketComponent } from './ticket/ticket.component';
import { HomeRoutes } from './home.routing';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule,
    InternationalPhoneNumberModule
  ],
  declarations: [
      TicketComponent,
      TicketDetailComponent
    ],
    providers: [
      TicketService
    ]
})

export class HomeModule {}

