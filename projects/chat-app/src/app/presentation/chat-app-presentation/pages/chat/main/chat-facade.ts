import { Injectable, Signal, inject } from '@angular/core';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { FriendsService } from '../../../../../business/api/friend-repository/friends/friends.service';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class ChatFacade {
  private _friendsList = inject(FriendsService);

  public friendsList: Signal<[] | UserResponse<DefaultStreamChatGenerics>[]> = toSignal(
    this._friendsList.getFriendsFromChat(),
    { initialValue: [] }
  );
}
