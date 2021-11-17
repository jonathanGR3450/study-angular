import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    name: '',
    power: 0
  };
  send(): void {
    if (this.nuevo.name.trim().length === 0) { return; }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      name: '',
      power: 0
    };
    console.log(this.personajes);
  }

}
