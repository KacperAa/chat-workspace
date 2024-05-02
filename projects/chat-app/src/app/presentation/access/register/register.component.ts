import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';
import { RegisterFormGroup } from './models/register-form-group.model';

@Component({
  selector: 'kaa-register',
  standalone: true,
  imports: [AuthCoreComponent, MatButton, MatLabel, MatFormField, MatInput],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private _fb = inject(FormBuilder);
  public registerFormGroup: FormGroup<RegisterFormGroup> = this._fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    repeatPassword: ['', Validators.required],
  });
}
