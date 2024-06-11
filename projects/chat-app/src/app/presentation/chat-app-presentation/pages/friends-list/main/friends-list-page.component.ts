import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';

import { SkeletonBarComponent, SkeletonCircleLoaderComponent } from '../../../../../../../../ui/src/lib/atoms';
import { FriendsListComponent } from '../ui/organisms/friends-list/friends-list.component';
import { FriendsListPageFacade } from './friends-list-page.facade';

@Component({
  selector: 'kaa-firends-list-page',
  standalone: true,
  imports: [
    MatIcon,
    MatDivider,
    MatToolbar,
    MatIconButton,
    MatListModule,
    FriendsListComponent,
    SkeletonBarComponent,
    SkeletonCircleLoaderComponent,
  ],
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