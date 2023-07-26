import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/users/user.interface';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

  constructor (public userService: UserService) {}

  trackByItems(index: number, number: any): number {
    return number;
  }

  addNumber() {
    this.numbers.push(this.numbers.length + 1);
  }

  updateUser() {
    let user = {
      name: "Andres",
      lastname: "Garzon"
    }
    this.userService.loadUser(user)
    console.log(user);
  }
}
