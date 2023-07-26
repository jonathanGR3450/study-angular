import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/interfaces/users/user.interface';

const ANONYMUS_USER: User = {
  name: "test",
  lastname: "test"
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject = new BehaviorSubject<User>(ANONYMUS_USER);
  user$: Observable<User> = this.subject.asObservable();

  loadUser(user: User) {
    this.subject.next(user)
  }
}
