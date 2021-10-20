import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountantComponent } from './accountant/accountant.component';



@NgModule({
  declarations: [
    AccountantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountantComponent
  ]
})
export class AccountantModule { }
