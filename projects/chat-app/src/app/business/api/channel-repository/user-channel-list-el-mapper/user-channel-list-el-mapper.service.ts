import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Channel, FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { TextCloudSendStatus } from '../../../../../../../ui/src/lib/molecules/text-cloud/models/text-cloud-send.status.model';
import { UserApiService } from '../../user-repository/user-api.service';
import { UserChannelConversationListEl } from './models/user-channel-conversation-list-el.model';

import { Observable, map, switchMap } from 'rxjs';

@Injectable()
export class UserChannelConversationMapperService {
  private _auth = inject(Auth);
  private _userApi = inject(UserApiService);

  public mapUserChannelPresentation(
    channel: Channel<DefaultStreamChatGenerics>
  ): Observable<UserChannelConversationListEl> {
    const otherUserMemberId = this._getOtherMemberUserId(channel);

    return this._userApi.getUserFormChat(otherUserMemberId).pipe(
      switchMap(getStreamResponse => {
        return this._userApi.getFireUserFromDatabase(otherUserMemberId).pipe(
          map(fireUser => {
            const isUserOnline = Boolean(getStreamResponse.users[0].online);
            return {
              isUserOnline: isUserOnline,
              channelImage: String(fireUser.photoURL),
              channelName: fireUser.displayName,
              last_message_at: String(channel.data?.last_message_at ?? ''),
              last_message: this._getLastMessage(channel)?.text!,
              last_message_status: this._getLastMessage(channel)?.status as TextCloudSendStatus,
            };
          })
        );
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

  private _getLastMessage(
    channel: Channel<DefaultStreamChatGenerics>
  ): FormatMessageResponse<DefaultStreamChatGenerics> | null {
    const latestMessages = channel.state.latestMessages;
    return latestMessages.length > 0 ? latestMessages[latestMessages.length - 1] : null;
  }
}
