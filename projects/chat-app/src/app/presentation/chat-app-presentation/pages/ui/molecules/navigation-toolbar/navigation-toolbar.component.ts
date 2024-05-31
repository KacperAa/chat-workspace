import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'kaa-navigation-toolbar',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatIconButton],
  templateUrl: './navigation-toolbar.component.html',
  styleUrl: './navigation-toolbar.component.scss',
})
export class NavigationToolbarComponent {
  private _router = inject(Router);

  public navigateToChatConversations(): void {
    this._router.navigate(['chat/conversations']);
  }
}
