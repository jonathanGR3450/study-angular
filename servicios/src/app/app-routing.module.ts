import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsComponent } from './pages/starwars/starwars.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: 'starwars', component: StarwarsComponent },
  { path: 'nasa', component: NasaComponent },
  { path: 'starwars/detail/:uid', component: DetailComponent },
  { path: '**', redirectTo: '/starwars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
