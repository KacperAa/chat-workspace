import { Component, input, output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem, MatListItemMeta } from '@angular/material/list';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '../../../../../../../../../../ui/src/lib/atoms';
import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules';

@Component({
  selector: 'kaa-friends-list',
  standalone: true,
  imports: [
    MatList,
    MatIcon,
    MatDivider,
    MatListItem,
    MatIconButton,
    MatBadgeModule,
    AvatarComponent,
    MatListItemMeta,
    AvatarWithContentComponent,
  ],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.scss',
})
export class FriendsListComponent {
  public friends = input.required<[] | UserResponse<DefaultStreamChatGenerics>[]>();
  public onEmitUser = output<UserResponse<DefaultStreamChatGenerics>>();

  public onMore = output<void>();
}
