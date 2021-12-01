import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  nuevo: Personaje = {
    name: '',
    power: 0
  };

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter;
  send(): void {
    if (this.nuevo.name.trim().length === 0) { return; }
    // this.onNewPersonaje.emit(this.nuevo);
    this.dbzService.addNewPersonaje(this.nuevo);
    this.nuevo = {
      name: '',
      power: 0
    };
  }

  constructor (private dbzService: dbzService){}

}
