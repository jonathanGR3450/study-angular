import { Component } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menus: Menu[];

  constructor(private menuService: MenuService) {
    this.menus = menuService.getMenu();
  }
}
