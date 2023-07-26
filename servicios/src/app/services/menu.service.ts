import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu1: Menu = {
    name: 'STARWARS',
    submenu: 'Datos Starwars',
    icon: 'metismenu-icon pe-7s-rocket',
    url: '/starwars'
  }

  private menu2: Menu = {
    name: 'NASA',
    submenu: 'Noticia',
    icon: 'metismenu-icon pe-7s-rocket',
    url: '/nasa'
  }

  private menus: Menu[];
  constructor() {
    this.menus = [this.menu1, this.menu2];
   }

  getMenus = () => { return this.menus }

}
