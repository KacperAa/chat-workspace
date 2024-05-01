import { Component } from '@angular/core';

import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';

@Component({
  selector: 'kaa-login',
  standalone: true,
  imports: [AuthCoreComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
