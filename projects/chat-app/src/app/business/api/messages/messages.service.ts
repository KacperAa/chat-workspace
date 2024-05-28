import { Injectable, inject } from '@angular/core';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChannelsStore } from '../channels/channels.store';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private _channelStore = inject(ChannelsStore);

  public getMessages(id: string): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._channelStore.getChannelApi(id).pipe(
      map(channel => {
        return channel.state.messages;
      })
    );
  }
}
