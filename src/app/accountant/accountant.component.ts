import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {

  title: string = 'Contador App';
  number: number = 10;
  base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  accumulate(value: number) {
    this.number += value;
  }

}
