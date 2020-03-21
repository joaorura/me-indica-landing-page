import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { UserModel } from '../../user.model';

import { AuthenticatorService } from '../../authenticator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    'complete-name': new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(120)
      ]
    ),
    'the-email': new FormControl(
      null,
      [
        Validators.required
      ]
      )
  });

  public registerComplete = false;
  public trying = false;
  public message = '';

  constructor(public authenticatorService: AuthenticatorService) { }

  ngOnInit(): void {
  }

  submitRegister(): void {
    if (this.form.valid) {
      const user: UserModel = new UserModel(
        this.form.value['complete-name'],
        this.form.value['the-email']
      );

      if (!this.trying) {
        this.trying = true;
        this.message = '';
        const observable = this.authenticatorService.registerUser(user);
        observable.subscribe((result: boolean) => {
          this.registerComplete = result;
          this.trying = false;
          this.message = 'O email já está sendo usado. Por favor tente com um outro!';
        });
      }
    }
  }
}
