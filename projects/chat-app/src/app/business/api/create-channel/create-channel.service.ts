import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { QueryChannelAPIResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateChannelService {
  private _auth = inject(Auth);
  private _chatService = inject(ChatClientService);

  // public createChannel(): void {
  //   const channel = this._chatService.chatClient.channel('messaging', 'dupsko', {
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  //     name: 'Tduspko',
  //     members: [this._auth.currentUser!.uid],
  //   });

  //   from(channel.create());
  // }

  public createChannelWithUser(targetUser: {
    uid: string;
    displayName: string;
    photoURL: string;
  }): Observable<QueryChannelAPIResponse<DefaultStreamChatGenerics>> {
    const currentUser = this._auth.currentUser;
    if (!currentUser) {
      throw new Error('Current user not logged in');
    }

    const channelId = this._generateChannelId(currentUser.uid, targetUser.uid);

    const channel = this._chatService.chatClient.channel('messaging', channelId, {
      members: [currentUser.uid, targetUser.uid],
      created_by: { id: currentUser.uid },
      extra_data: {
        [currentUser.uid]: {
          nickname: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [targetUser.uid]: {
          nickname: targetUser.displayName,
          photoURL: targetUser.photoURL,
        },
      },
    });

    return from(channel.create());
  }

  private _generateChannelId(uid1: string, uid2: string): string {
    return `${[uid1, uid2].sort().join('-')}`;
  }
}
