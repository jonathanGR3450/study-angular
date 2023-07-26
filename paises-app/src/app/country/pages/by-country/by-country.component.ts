import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countriy.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  termino: string = "";
  errors: boolean = false;
  results: Country[] = [];
  constructor(private coutryService: CountryService) { }

  ngOnInit(): void {
  }

  search( termino:string ) {
    this.errors = false;
    this.termino = termino;
    this.coutryService.search(this.termino)
      .subscribe((result) => {
        this.results = result;
        console.log(this.results);
      }, (error) => {
        this.errors = true;
        this.results = [];
      });
  }

}
