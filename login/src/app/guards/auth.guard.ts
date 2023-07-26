import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    return new Promise(resolve => {
      const token = localStorage.getItem('token');

      if (token) {
        const body = {
          idToken: token
        };
        this.loginService.getUser(body).subscribe(response => {
          resolve(true);
        }, error => {
          this.router.navigateByUrl('/login');
          resolve(false);
        })
      } else {
        this.router.navigateByUrl('/login');
        resolve(false);
      }

    });
  }

}
