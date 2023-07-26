import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { Error404Component } from './shared/error404/error404.component';
import { SigninComponent } from './shared/signin/signin.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: 'auth', loadChildren: () => import('./shared/pages.module').then( m => m.PagesModule ) },
  // { path: "signin", component: SigninComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
