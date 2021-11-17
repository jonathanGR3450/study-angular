import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

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

  nuevo: Personaje = {
    name: '',
    power: 0
  };
}
