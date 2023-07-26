import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { UserService } from '../services/user.service';
import { User } from '../intrerfaces/user.interface';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styles: [
  ]
})
export class ReactComponent implements OnInit {

  users: User[] = [];
  form: FormGroup = this.fb.group({
    user: [, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]
    ],
    password: [, [
      Validators.required
    ]]
  });
  user: string = '';
  password: string = '';
  @ViewChild('userInput') userInput!: ElementRef<HTMLInputElement>
  @ViewChild(ParagraphComponent) paragraph!: ParagraphComponent;


  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    console.log('constructor');

    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
      console.log(this.users);

    })

  }

  ngOnInit(): void {
    console.log('on init');
  }

  send() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.controls['password'].errors);
    this.router.navigateByUrl('/dashboard');

  }

  show() {
    console.log(this.userInput.nativeElement.value);
    this.paragraph.content = 'text change';
  }

  deleteUser(id: number) {
    this.users = this.users.filter( (user: User) => user.id != id )
  }
}
