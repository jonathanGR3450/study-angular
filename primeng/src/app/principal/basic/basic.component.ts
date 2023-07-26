import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {

  user: string = '';
  password: string = '';

  send(form: NgForm) {
    console.log(form);
  }

}
