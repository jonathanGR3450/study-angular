import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Superman'];
  deletedHero: string = '';

  DeleteHero(): void {
    this.deletedHero = this.heroes.shift() || '';
  }

}
