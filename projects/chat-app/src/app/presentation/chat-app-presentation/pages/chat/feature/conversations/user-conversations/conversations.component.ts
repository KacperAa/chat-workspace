import { Component, inject } from '@angular/core';

import { AvatarComponent } from '../../../../../../../../../../ui/src/lib/atoms';
import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';
import { SkeletonCircleAndBarsComponent } from '../../../../../../../../../../ui/src/lib/molecules/skeleton-circle-and-bars/skeleton-circle-and-bars.component';
import { UsersStore } from '../../../../../../../business/api/user/users.store';
import { ChatLoader } from '../../../../../../../business/chat-loader/chat-loader';

@Component({
  selector: 'kaa-conversations',
  standalone: true,
  templateUrl: './conversations.component.html',
  styleUrl: '../_conversations.base.scss',
  imports: [SkeletonCircleAndBarsComponent, AvatarWithContentComponent, AvatarComponent],
})
export class ConversationsComponent {
  public chatLoader: ChatLoader = inject(ChatLoader);
  public usersStore: UsersStore = inject(UsersStore);
}
