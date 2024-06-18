import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { MessageApiService } from '../message-api.service';
import { MessageResponseMapper } from './models/message-response-mapper.model';

import { Observable, map } from 'rxjs';

@Injectable()
export class MessageMapperService {
  private _auth = inject(Auth);
  private _messageApi = inject(MessageApiService);

  public mapMessages(channelId: string): Observable<MessageResponseMapper[]> {
    console.log('test');
    const currentUser = this._auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    return this._messageApi.getMessagesFromChannel(channelId).pipe(
      map(messages =>
        messages.map(message => ({
          ...message,
          user: {
            ...message.user,
            id: message.user!.id!,
            isCurrentUser: message!.user!.id === currentUser.uid,
          },
        }))
      )
    );
  }
}
