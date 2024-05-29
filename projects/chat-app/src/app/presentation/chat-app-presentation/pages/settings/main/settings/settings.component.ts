import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'kaa-settings',
  standalone: true,
  imports: [MatToolbar, MatIconButton, MatIcon],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private _router: Router = inject(Router);

  public navigateToChat(): void {
    this._router.navigate(['chat/conversations']);
  }
}
