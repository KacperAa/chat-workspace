import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { UserApiService } from '../../user-repository/user-api.service';
import { MessageApiService } from '../message-api.service';
import { MessageResponseMapper } from './models/message-response-mapper.model';

import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable()
export class MessageMapperService {
  private _auth = inject(Auth);
  private _userApi = inject(UserApiService);
  private _messageApi = inject(MessageApiService);

  public mapMessages(channelId: string): Observable<MessageResponseMapper[]> {
    const currentUser = this._auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    return this._messageApi.getMessagesFromChannel(channelId).pipe(
      switchMap(messages => {
        const photoRequests = messages.map(message => this._userApi.getFireUserPhotoFromDatabase(message.user!.id));

        return forkJoin(photoRequests).pipe(
          map(photoURLs => {
            const lastCurrentUserMessageIndex = this._findLastCurrentUserMessageIndex(messages, currentUser.uid);

            return messages.map((message, index) => {
              const isLastCurrentUserMessage = index === lastCurrentUserMessageIndex;

              console.log({
                ...message,
                ...(isLastCurrentUserMessage && { isLastCurrentUserMessage: true }),
                user: {
                  ...message.user,
                  id: message.user!.id!,
                  isCurrentUser: message!.user!.id === currentUser.uid,
                  photoURL: photoURLs[index],
                },
              });

              return {
                ...message,
                ...(isLastCurrentUserMessage && { isLastCurrentUserMessage: true }),
                user: {
                  ...message.user,
                  id: message.user!.id!,
                  isCurrentUser: message!.user!.id === currentUser.uid,
                  photoURL: photoURLs[index],
                },
              };
            });
          })
        );
      })
    );
  }

  private _findLastCurrentUserMessageIndex(
    messages: FormatMessageResponse<DefaultStreamChatGenerics>[],
    currentUserId: string
  ): number | null {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].user!.id === currentUserId) {
        return i;
      }
    }
    return null;
  }
}
