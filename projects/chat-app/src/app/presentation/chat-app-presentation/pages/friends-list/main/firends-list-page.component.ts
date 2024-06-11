import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

import { FriendsListComponent } from '../ui/organisms/friends-list/friends-list.component';
import { FriendsListPageFacade } from './friends-list-page.facade';

@Component({
  selector: 'kaa-firends-list-page',
  standalone: true,
  imports: [MatToolbar, MatIconButton, MatIcon, FriendsListComponent],
  providers: [FriendsListPageFacade],
  templateUrl: './firends-list-page.component.html',
  styleUrl: './firends-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirendsListPageComponent implements OnInit {
  protected friendsListPageFacade = inject(FriendsListPageFacade);

  public ngOnInit(): void {
    this.friendsListPageFacade.initChatApp();
  }
}
