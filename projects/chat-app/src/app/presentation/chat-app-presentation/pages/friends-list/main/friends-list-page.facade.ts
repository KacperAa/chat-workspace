import { Injectable, Signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { CreateChannelService } from '../../../../../business/api/channel-repository/create-channel/create-channel.service';
import { FriendsListMapperService } from '../../../../../business/api/friend-repository/friends-list-mapper/friends-list-mapper.service';
import { ChatInitializerService } from '../../../../../business/chat-initializer/chat-initializer.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable()
export class FriendsListPageFacade {
  private _router = inject(Router);
  private _friendsListMapper = inject(FriendsListMapperService);
  private _createChannel = inject(CreateChannelService);
  private _chatInitializer = inject(ChatInitializerService);

  public friendsList: Signal<[] | UserResponse<DefaultStreamChatGenerics>[]> = toSignal(
    this._friendsListMapper.mapToFriendsList(),
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

  public createChannelWithUser(targetUser: UserResponse<DefaultStreamChatGenerics>): void {
    this._createChannel
      .createChannelWithUser({
        uid: targetUser.id,
        displayName: targetUser?.name!,
        photoURL: String(targetUser['photoURL']),
      })
      .pipe(
        map(response => {
          this._router.navigate([`chat/${response.channel.id}`]);
        })
      )
      .subscribe();
  }
}
