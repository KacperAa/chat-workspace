import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

import { MessageApiService } from '../message-api.service';
import { MessageResponseMapper } from './models/message-response-mapper.model';

import { Observable, map } from 'rxjs';

@Injectable()
export class MessageMapperService {
  private _auth = inject(Auth);
  private _messageApi = inject(MessageApiService);

  public mapMessages(channelId: string): Observable<any[]> {
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
            isCurrentUser: message!.user!.id === currentUser.uid,
          },
        }))
      )
    );
  }
}
