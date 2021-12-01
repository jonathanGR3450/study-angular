import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // personajes: Personaje[] = [];
  constructor( private dbzService: dbzService) {
    // this.personajes = this.dbzService.personajes;
  }
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }
}
