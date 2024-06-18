import { Injectable, inject, signal } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { filter, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  private _channel = inject(ChannelService);

  public watchChannelTyping() {
    return this._channel.activeChannel$.pipe(
      filter(channel => !!channel),
      map(channel => {
        if (channel) {
          channel.watch();
          this._initTypingEvents(channel);
        }
      })
    );
  }

  public channelTyping(): void {
    from(this._channel.activeChannel!.keystroke());
  }

  public channelStopTyping(): void {
    from(this._channel.activeChannel!.stopTyping());
  }

  private _initTypingEvents(channel: Channel<DefaultStreamChatGenerics>): void {
    channel.on('typing.start', event => {
      console.log(`${event.user!.name} started typing`);
    });
    channel.on('typing.stop', event => {
      console.log(`${event.user!.name} stopped typing`);
    });
  }
}
