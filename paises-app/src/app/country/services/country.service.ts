import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countriy.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = "http://api.countrylayer.com/v2";
  private apiKey: string = "cb1903d42b7725e0370fad737d727455";

  public result: any;

  constructor(private http: HttpClient) { }

  search(termino: string): Observable<Country[]> {
    var params = new HttpParams()
      .set('access_key', this.apiKey);

    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`, { params });
  }
}
