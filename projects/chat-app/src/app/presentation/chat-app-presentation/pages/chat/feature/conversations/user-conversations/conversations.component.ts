import { Component, Signal, inject } from '@angular/core';

import { AvatarComponent } from '../../../../../../../../../../ui/src/lib/atoms';
import { AvatarWithStatusComponent } from '../../../../../../../../../../ui/src/lib/molecules';
import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';
import { SkeletonCircleAndBarsComponent } from '../../../../../../../../../../ui/src/lib/molecules/skeleton-circle-and-bars/skeleton-circle-and-bars.component';
import { MappedUserFields } from '../../../../../../../business/api/auth/models/mapped-user-fields.model';
import { FriendsService } from '../../../../../../../business/api/friends/friends.service';
import { ChatLoader } from '../../../../../../../business/chat-loader/chat-loader';
import { StatusPipe } from './pipe/status.pipe';

import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'kaa-conversations',
  standalone: true,
  templateUrl: './conversations.component.html',
  styleUrl: '../_conversations.base.scss',
  imports: [
    SkeletonCircleAndBarsComponent,
    AvatarWithContentComponent,
    AvatarComponent,
    AvatarWithStatusComponent,
    StatusPipe,
  ],
})
export class ConversationsComponent {
  public chatLoader: ChatLoader = inject(ChatLoader);
  private _friendsList = inject(FriendsService);

  public friendsList: Signal<MappedUserFields[]> = toSignal(this._friendsList.getFriends(), { initialValue: [] });
}
