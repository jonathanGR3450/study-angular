import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { SigninComponent } from './signin/signin.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HomeComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    Error404Component,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ],
  exports: [
    IndexComponent,
    NavComponent,
    FooterComponent,
    // HomeComponent,
    Error404Component,
  ]
})
export class PagesModule { }
