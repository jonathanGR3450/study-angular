import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomTranslationsPipe } from 'src/app/pipes/custom-translations.pipe';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LoginComponent,
                CustomTranslationsPipe
            ],
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                FormsModule,
                RouterTestingModule,
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('must be form email invalid', () => {
        const form = component.formlogin
        const email = form.controls['email']

        email.setValue('test@test.com')
        expect(form.invalid).toBeTrue();
    });

    it('must be form password invalid', () => {
        const form = component.formlogin
        const password = form.controls['password']

        password.setValue('password')
        expect(form.invalid).toBeTrue();
    });

    it('form login must be valid', () => {
        const form = component.formlogin
        const email = form.controls['email']
        const password = form.controls['password']
        const checkHuman = form.controls['checkHuman']

        email.setValue('test@test.com');
        password.setValue('password');
        checkHuman.setValue('2')
        expect(form.invalid).toBeFalse();
    });
});
