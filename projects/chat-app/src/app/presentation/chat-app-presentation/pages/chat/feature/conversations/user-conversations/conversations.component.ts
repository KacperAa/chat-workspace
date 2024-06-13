import { Component, Signal, inject } from '@angular/core';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '../../../../../../../../../../ui/src/lib/atoms';
import { AvatarWithStatusComponent } from '../../../../../../../../../../ui/src/lib/molecules';
import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';
import { SkeletonCircleAndBarsComponent } from '../../../../../../../../../../ui/src/lib/molecules/skeleton-circle-and-bars/skeleton-circle-and-bars.component';
import { ConversationsService } from '../../../../../../../business/api/conversations/conversations.service';
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
    StatusPipe,
    AvatarComponent,
    AvatarWithStatusComponent,
    AvatarWithContentComponent,
    SkeletonCircleAndBarsComponent,
  ],
})
export class ConversationsComponent {
  public chatLoader: ChatLoader = inject(ChatLoader);
  private _friendsList = inject(FriendsService);
  private _conversation = inject(ConversationsService);

  public friendsList: Signal<[] | UserResponse<DefaultStreamChatGenerics>[]> = toSignal(
    this._friendsList.getFriendsFromChat(),
    { initialValue: [] }
  );

  public convertationList = toSignal(this._conversation.getUserConversations(), { initialValue: [] });
}
