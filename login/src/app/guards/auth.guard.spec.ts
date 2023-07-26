import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../services/login.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let loginService: LoginService;
  let router: jasmine.SpyObj<Router>;
  let activatedRouteSnapshot: ActivatedRouteSnapshot;
  let routerStateSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthGuard,
        LoginService
      ]
    });

    router = jasmine.createSpyObj<Router>('Router', ['navigate']);

    guard = TestBed.inject(AuthGuard);
    loginService = TestBed.inject(LoginService);
    // router: TestBed.inject(Router);

    activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    routerStateSnapshot = {} as RouterStateSnapshot;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be allow access profile', () => {
    const body = {
      idToken: 'token valid'
    };
    // spyOn(LoginService, 'getUser').withArgs(body).and.returnValue(true);
  })
});
