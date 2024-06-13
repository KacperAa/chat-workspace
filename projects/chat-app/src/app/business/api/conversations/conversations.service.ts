import { Injectable, inject } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversationsService {
  private _channels = inject(ChannelService);

  public getUserConversations(): Observable<Channel<DefaultStreamChatGenerics>[] | null> {
    return this._channels.channels$.pipe(
      map(channels => {
        return channels?.filter(channel => channel.type === 'messaging') || null;
      })
    );
  }
}
