import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';
import { LoginFormGroup } from './models/login-form-group.model';

const MATERIAL_IMPORTS = [MatFormField, MatInput, MatLabel, MatButton];

@Component({
  selector: 'kaa-login',
  standalone: true,
  imports: [MATERIAL_IMPORTS, AuthCoreComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _fb = inject(FormBuilder);
  public loginFormGroup: FormGroup<LoginFormGroup> = this._fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
}
