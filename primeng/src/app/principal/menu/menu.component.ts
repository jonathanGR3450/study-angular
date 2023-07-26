import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Forms Basics',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'basics'
      },
      {
        label: 'Forms React',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'react'
      }
    ];
  }

}
