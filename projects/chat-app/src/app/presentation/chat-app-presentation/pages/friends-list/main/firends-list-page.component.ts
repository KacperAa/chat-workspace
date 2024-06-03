import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'kaa-firends-list-page',
  standalone: true,
  imports: [MatToolbar, MatIconButton, MatIcon],
  templateUrl: './firends-list-page.component.html',
  styleUrl: './firends-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirendsListPageComponent {
  private _router = inject(Router);

  public navigateToUserConversations(): void {
    this._router.navigate(['chat/conversations']);
  }

  public navigateToAddFriends(): void {}
}
