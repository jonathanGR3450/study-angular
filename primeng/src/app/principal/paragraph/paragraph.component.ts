import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../intrerfaces/user.interface';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styles: [
  ]
})
export class ParagraphComponent {
  content: string = 'default text';
  @Input('alias') usersx: any;
  @Output() delete = new EventEmitter<any>();

  constructor() {
  }

  deleteUser(id: number) {
    console.log(id);
    this.delete.emit(id)
  }
}
