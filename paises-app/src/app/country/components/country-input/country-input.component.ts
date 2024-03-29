import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino: string = "";

  search(){
    this.onEnter.emit( this.termino );
  }

}
