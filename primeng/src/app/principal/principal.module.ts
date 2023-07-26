import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { BasicComponent } from './basic/basic.component';
import { ReactComponent } from './react/react.component';
import { MenuComponent } from './menu/menu.component';
import { PrimeModule } from '../moduleprime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParagraphComponent } from './paragraph/paragraph.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    BasicComponent,
    ReactComponent,
    MenuComponent,
    DashboardComponent,
    ParagraphComponent,
  ],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class PrincipalModule { }
