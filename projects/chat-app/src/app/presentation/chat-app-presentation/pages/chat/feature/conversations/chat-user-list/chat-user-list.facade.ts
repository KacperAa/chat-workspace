import { Injectable, Signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ChannelsListMapperService } from '../../../../../../../business/api/channels/channels-list-mapper/channels-list-mapper.service';
import { UserChannelConversationMapperService } from '../../../../../../../business/api/user-channel-conversation/user-channel-conversation-mapper.service';
import { ChatLoader } from '../../../../../../../business/chat-loader/chat-loader';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class ChatUserListFacade {
  private _userConversationMapper = inject(UserChannelConversationMapperService);

  private _router = inject(Router);

  private _chatLoader = inject(ChatLoader);

  public userConversationList = toSignal;

  public navigateToChannel(id: unknown): void {
    this._router.navigate([`chat/${id}`]);
  }

  private _getUser() {
    this._userConversationMapper;
  }
}
