import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login.interface';
import { LoginService } from 'src/app/services/login.service';
import { HumanCheckService } from 'src/app/services/login/human-check.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  steps: any = [
    "STEP_1",
    "STEP_2"
  ];

  formlogin: FormGroup = this.fb.group({
    email: [, [
      Validators.required,
      Validators.email
    ]],
    password: [, [
      Validators.required
    ]],
    checkHuman: [, [
      Validators.required
    ]]
  });

  humanCheck: any = this.humanCheckService.generateNumbers();

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private humanCheckService: HumanCheckService) { }

  login() {
    if (!this.formlogin.valid) {
      this.formlogin.markAllAsTouched()
      return;
    }
    const [number1, number2] = this.humanCheck;
    const result = this.formlogin.value.checkHuman;
    if (!this.humanCheckService.checkNumbers(number1, number2, result)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Human check is not valid',
        showConfirmButton: false,
      });
      return;
    }
    const user: Login = {
      email: this.formlogin.controls['email'].value,
      password: this.formlogin.controls['password'].value,
      returnSecureToken: true,
    }
    this.loginService.login(user).subscribe(resp => {
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/dashboard/profile')
    },
      error => {
        var message = '';
        switch (error.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            message = "Correo no valido";
            break;
          case 'INVALID_PASSWORD':
            message = "Contraseña incorrecta";
            break;
          default:
            message = error.error.error.message;
            break;
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
          showConfirmButton: false,
        });
      });

  }

}
