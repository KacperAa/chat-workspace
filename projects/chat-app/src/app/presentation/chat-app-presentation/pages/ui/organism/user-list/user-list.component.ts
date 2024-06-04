import { Component, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { AvatarWithContentComponent } from '../../../../../../../../../ui/src/lib/molecules';

@Component({
  selector: 'kaa-user-list',
  standalone: true,
  imports: [MatList, MatDivider, MatListItem, AvatarComponent, AvatarWithContentComponent, MatIconButton, MatIcon],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  public users = input.required<UserResponse<DefaultStreamChatGenerics>[] | null>();
}
