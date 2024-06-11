import { Injectable, Signal, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MappedUserFields } from '../../../../../business/api/auth/models/mapped-user-fields.model';
import { FriendsService } from '../../../../../business/api/friends/friends.service';
import { ChatInitializerService } from '../../../../../business/chat-initializer/chat-initializer.service';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class FriendsListPageFacade {
  private _router = inject(Router);
  private _friends = inject(FriendsService);
  private _chatInitializer = inject(ChatInitializerService);

  public friendsList: Signal<MappedUserFields[]> = toSignal(this._friends.getFriends(), { initialValue: [] });

  public initChatApp(): void {
    this._chatInitializer.initChat();
  }

  public navigateToUserConversations(): void {
    this._router.navigate(['chat/conversations']);
  }

  public navigateToAddFriends(): void {
    this._router.navigate(['add-friends']);
  }
}
