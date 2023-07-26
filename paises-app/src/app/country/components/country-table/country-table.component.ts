import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countriy.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent implements OnInit {

  @Input() results: Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
