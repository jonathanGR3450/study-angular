import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { BasicComponent } from './principal/basic/basic.component';
import { ReactComponent } from './principal/react/react.component';
import { DashboardComponent } from './principal/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'basics', component: BasicComponent },
  { path: 'react', component: ReactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/basics' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
