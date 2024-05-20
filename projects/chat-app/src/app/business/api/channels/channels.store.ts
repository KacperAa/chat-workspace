import { Injectable, Signal, inject } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ChannelsStore {
  private _channelService = inject(ChannelService);

  readonly channels: Signal<Channel<DefaultStreamChatGenerics>[] | undefined> = toSignal(
    this._channelService.channels$,
    { initialValue: [] }
  );
}
