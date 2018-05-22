import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import {ScrollModule} from './scroll/scroll.module';
import { LocationStrategy, PathLocationStrategy, CommonModule, HashLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketDetailComponent } from './home/ticket-detail/ticket-detail.component';
import {APP_BASE_HREF} from '@angular/common';


import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    ScrollModule,
    NgbModule.forRoot(),
    InternationalPhoneNumberModule,
  ],
  exports: [ScrollModule],
  // providers: [
  //     { provide: LocationStrategy, useClass: PathLocationStrategy },
  //     AuthGuard,
  //     {provide: APP_BASE_HREF, useValue: '/wnumber'}
  // ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuard,
    {provide: APP_BASE_HREF, useValue: '/wno'}
],
  bootstrap: [AppComponent]
})
export class AppModule {}
