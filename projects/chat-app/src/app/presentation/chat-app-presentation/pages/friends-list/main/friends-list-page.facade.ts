import { Injectable, Signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { FriendsService } from '../../../../../business/api/friends/friends.service';
import { ChatInitializerService } from '../../../../../business/chat-initializer/chat-initializer.service';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class FriendsListPageFacade {
  private _router = inject(Router);
  private _friends = inject(FriendsService);
  private _chatInitializer = inject(ChatInitializerService);

  public friendsList: Signal<[] | UserResponse<DefaultStreamChatGenerics>[]> = toSignal(
    this._friends.getFriendsFromChat(),
    { initialValue: [] }
  );

  public isFriendsListLoaded: Signal<boolean> = computed(() => this.friendsList().length > 0);

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
