import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { UserApiService } from '../users/user-api.service';
import { UserChannelConversationListEl } from './models/user-channel-conversation-list-el.model';

import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserChannelConversationMapperService {
  private _auth = inject(Auth);
  private _userApi = inject(UserApiService);

  public mapUserChannelPresentation(
    channel: Channel<DefaultStreamChatGenerics>
  ): Observable<UserChannelConversationListEl> {
    const otherUserMemberId = this._getOtherMemberUserId(channel);

    return this._userApi.getUserFormChat(otherUserMemberId).pipe(
      switchMap(() => {
        return this._userApi._getFireUsersDatabase(otherUserMemberId);
      }),
      map(response => {
        return {
          isUserOnline: response.online,
          channelImage: String(response.photoURL),
          channelName: response.displayName,
          last_message_at: String(channel.data?.last_message_at ?? ''),
          last_message: this._getLastMessage(channel),
        };
      })
    );
  }

  /**
   * Retrieves the ID of the user on the other side of the conversation
   * @param channel Chat channel
   * @returns ID of the user on the opposite side
   */
  private _getOtherMemberUserId(channel: Channel<DefaultStreamChatGenerics>): string {
    const currentUser = this._auth.currentUser;

    if (!currentUser) {
      throw new Error('Current user not logged in');
    }
    const membersArray = Object.values(channel.state.members);

    const otherUserMemberId = membersArray.find(member => member.user_id !== currentUser.uid);
    return otherUserMemberId?.user?.id!;
  }

  private _getLastMessage(channel: Channel<DefaultStreamChatGenerics>): string | null {
    const latestMessages = channel.state.latestMessages;
    return latestMessages.length > 0 ? latestMessages[latestMessages.length - 1].text! : null;
  }
}
