import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Menu[] {
    let home: Menu = {
      name: 'Home',
      url: '/home'
    };

    let login: Menu = {
      name: 'Login',
      url: '/login'
    };

    let about: Menu = {
      name: 'About',
      url: '/about'
    };

    let contact: Menu = {
      name: 'Contact',
      url: '/contact'
    };
    return [home, login, about, contact];
  }
}
