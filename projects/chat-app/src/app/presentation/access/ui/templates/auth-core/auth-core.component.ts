import { Component, input } from '@angular/core';

@Component({
  selector: 'kaa-auth-core',
  standalone: true,
  imports: [],
  templateUrl: './auth-core.component.html',
  styleUrl: './auth-core.component.scss',
})
export class AuthCoreComponent {
  public headerText = input.required<string>();
}
