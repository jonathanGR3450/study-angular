import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
