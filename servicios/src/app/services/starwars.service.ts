import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private url: string = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  getData = () => {
    return this.http.get<any>(this.url);
  }

  getDetail(id: number) {
    return this.http.get<Character>(`${this.url}/${id}`)
      .pipe(map(response => {
        return response;
      }));
  }
}
