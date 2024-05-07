import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';
import { LoginFacade } from './login.facade';

const MATERIAL_IMPORTS = [MatFormField, MatInput, MatLabel, MatButton];

@Component({
  selector: 'kaa-login',
  standalone: true,
  imports: [MATERIAL_IMPORTS, AuthCoreComponent, ReactiveFormsModule],
  providers: [LoginFacade],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected loginFacade = inject(LoginFacade);
}
