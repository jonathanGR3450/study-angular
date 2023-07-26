import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { of, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment.development';

describe('LoginService', () => {
  let service: LoginService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
      providers: [LoginService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new LoginService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get auth object', (done: DoneFn) => {

    const mockCredentials = {
      email: "test@test.com",
      password: "password",
      returnSecureToken: true,
    }

    const mockResult = {
      kind: "identitytoolkit#VerifyPasswordResponse",
      localId: "localId",
      email: "test@test.com",
      displayName: "",
      idToken: "idtoken",
      registered: true,
      refreshToken: "refreshToken",
      expiresIn: "3600"
    }

    httpClientSpy.post.and.returnValue(of(mockResult));

    service.login(mockCredentials).subscribe({
      next: login => {
        expect(login).toEqual(mockResult);
        done();
      },
      error: done.fail
    });
  });

  it('should be error email invalid', (done: DoneFn) => {
    const mockWrongCredentials = {
      email: "email@wrong.com",
      password: "password",
      returnSecureToken: true,
    }

    const mockResult = {
      error: {
        code: 400,
        message: "INVALID_PASSWORD",
        errors: [
          {
            message: "INVALID_PASSWORD",
            domain: "global",
            reason: "invalid"
          }
        ]
      }
    }

    const observableError = of(null).pipe(
      switchMap(() => {
        return throwError(mockResult);
      })
    )
    httpClientSpy.post.and.returnValue(observableError);

    service.login(mockWrongCredentials).subscribe({
      next: login => {
        done.fail
      },
      error: error => {
        expect(error).toBeTruthy()
        expect(error).toEqual(mockResult)
        done()
      }
    });


  });

  it('should be get auth user', (done: DoneFn) => {
    const mockToken = {
      idToken: 'token jwt'
    };

    const mockResult = {
      kind: "kind",
      users: [
        {
          localId: "localId",
          email: "email",
          passwordHash: "passwordHash",
          emailVerified: false,
          passwordUpdatedAt: 1681317129531,
          providerUserInfo: [
            {
              providerId: "password",
              federatedId: "email",
              email: "email",
              rawId: "rawId"
            }
          ],
          validSince: "validSince",
          disabled: false,
          lastLoginAt: "lastLoginAt",
          createdAt: "createdAt",
          lastRefreshAt: "lastRefreshAt"
        }
      ]
    }

    httpClientSpy.post.and.returnValue(of(mockResult));

    service.getUser(mockToken).subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result).toEqual(mockResult);
      done()
    }, error => {
      done.fail;
    })
  })

  it('should be token wrong', (done: DoneFn) => {
    const mockTokenWrong = {
      idToken: 'wrong token'
    }
    const mockResultWrong = {
      error: {
        code: 400,
        message: "INVALID_ID_TOKEN",
        errors: [
          {
            message: "INVALID_ID_TOKEN",
            domain: "global",
            reason: "invalid"
          }
        ]
      }
    }
    const observableWrong = of(null).pipe(
      switchMap(() => {
        return throwError(mockResultWrong)
      })
    )

    httpClientSpy.post.and.returnValue(observableWrong);

    service.getUser(mockTokenWrong).subscribe(result => {
      done.fail
    }, error => {
      expect(error).toBeTruthy();
      expect(error).toEqual(mockResultWrong)
      done()
    });
  })

  it('should be token wrong method 2', (done: DoneFn) => {
    const mockTokenWrong = {
      idToken: 'wrong token'
    }
    const error400 = new HttpErrorResponse({
      error: {
        code: 400,
        message: "INVALID_ID_TOKEN",
        errors: [
          {
            message: "INVALID_ID_TOKEN",
            domain: "global",
            reason: "invalid"
          }
        ]
      }
    })

    httpClientSpy.post.and.returnValue(throwError(error400));

    service.getUser(mockTokenWrong).subscribe(result => {
      done.fail
    }, error => {
      expect(error).toBeTruthy();
      expect(error.error.code).toEqual(400);
      done();
    });
  })
});
