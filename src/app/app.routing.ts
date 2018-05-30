import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: 'authentication',
  //       loadChildren: './authentication/authentication.module#AuthenticationModule'
  //     }
  //   ]
  // },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'wno-booking',
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  }, 
  {
    path: '**',
    redirectTo: 'error/404'
  }];
