import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { VerticalScrollComponent } from '@ui/VerticalScrollComponent';

import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';

@Component({
  selector: 'kaa-register',
  standalone: true,
  imports: [AuthCoreComponent, MatButton, MatLabel, MatFormField, MatInput, VerticalScrollComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
