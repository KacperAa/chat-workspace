import { Component, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';

import { AvatarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { AvatarWithContentComponent } from '../../../../../../../../../ui/src/lib/molecules';
import { UserMergedResponse } from '../../../../../../business/api/all-app-users/models/user-merged-response.model';

@Component({
  selector: 'kaa-user-list',
  standalone: true,
  imports: [MatList, MatDivider, MatListItem, AvatarComponent, AvatarWithContentComponent, MatIconButton, MatIcon],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  public users = input.required<UserMergedResponse[] | null>();

  public onAddFriend = output<UserMergedResponse>();
}
