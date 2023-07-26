import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login.interface';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlLogin = `${environment.urlLogin}${environment.firebase.apiKey}`;
  private urlUser = `${environment.urlUser}${environment.firebase.apiKey}`;

  constructor(private http: HttpClient) { }

  login(user: Login){
    return this.http.post(`${this.urlLogin}`, user).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.idToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        return response;
      })
    )
  }
  
  getUser(token: any) {
    return this.http.post(`${this.urlUser}`, token)
  }
}
