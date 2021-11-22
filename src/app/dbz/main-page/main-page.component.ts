import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor( private dbzService: dbzService) {}

  personajes: Personaje[] = [
    {
      name: 'Pikoro',
      power: 700
    },
    {
      name: 'Goku',
      power: 1700
    },
  ];

  addNewPersonaje(personaje: Personaje){
    this.personajes.push(personaje);
  }
}
