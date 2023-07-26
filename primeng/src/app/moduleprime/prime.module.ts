import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimeModule { }
