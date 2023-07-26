import { Component } from '@angular/core';
import { Menu } from './interfaces/menu.interface';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicios';

  public menus: Menu[];

  constructor(private menuService: MenuService) {
    this.menus = menuService.getMenus();
  }


}
