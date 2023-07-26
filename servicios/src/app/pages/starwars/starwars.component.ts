import { Component } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent {
  public dStarwars: any;
  query: any = '';
  constructor(private starwars: StarwarsService) {
    this.dataStarwar();
  }

  dataStarwar() {
    this.starwars.getData().subscribe(response => {
      this.dStarwars = response.results;
      console.log(this.dStarwars);
    });
  }

}
