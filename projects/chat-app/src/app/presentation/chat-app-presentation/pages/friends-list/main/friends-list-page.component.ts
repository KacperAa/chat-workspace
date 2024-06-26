import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

import { UserListSkeletonLoaderComponent } from '../../ui/organism/user-list-skeleton-loader/user-list-skeleton-loader.component';
import { FriendsListComponent } from '../ui/organisms/friends-list/friends-list.component';
import { FriendsListPageFacade } from './friends-list-page.facade';

@Component({
  selector: 'kaa-firends-list-page',
  standalone: true,
  imports: [MatIcon, MatToolbar, MatIconButton, FriendsListComponent, UserListSkeletonLoaderComponent],
  providers: [FriendsListPageFacade],
  templateUrl: './friends-list-page.component.html',
  styleUrl: './friends-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsListPageComponent implements OnInit {
  protected friendsListPageFacade = inject(FriendsListPageFacade);

  public ngOnInit(): void {
    this.friendsListPageFacade.initChatApp();
  }
}
