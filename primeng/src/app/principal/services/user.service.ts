import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../intrerfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {
  }

  getUsers(){
    return this.httpClient.get<User[]>(`${this.url}/users`);
  }
}
