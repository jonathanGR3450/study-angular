import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/users/user.interface';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent{

  constructor (public userService: UserService) {}

  subscribeToNewsletter(email:string){
    console.log(email);
  }
}
