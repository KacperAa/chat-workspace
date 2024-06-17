import { Injectable, Signal, inject } from '@angular/core';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { FriendsListMapperService } from '../../../../../business/api/friend-repository/friends-list-mapper/friends-list-mapper.service';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class ChatFacade {
  private _friendsListMapper = inject(FriendsListMapperService);

  public friendsList: Signal<[] | UserResponse<DefaultStreamChatGenerics>[]> = toSignal(
    this._friendsListMapper.mapToFriendsList(),
    { initialValue: [] }
  );
}
