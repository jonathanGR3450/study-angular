import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/characters.interface';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  private idCharacter: number;
  public character: any;

  constructor(private starwarsService: StarwarsService, private activatedRoute: ActivatedRoute) {
    this.idCharacter = activatedRoute.snapshot.params['uid'];
    this.starwarsService.getDetail(this.idCharacter).subscribe(response => {
      this.character = response;
      console.log(this.character);
    });
  }

}
