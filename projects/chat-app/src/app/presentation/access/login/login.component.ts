import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';

@Component({
  selector: 'kaa-login',
  standalone: true,
  imports: [AuthCoreComponent, MatFormField, MatInput, MatLabel, MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
