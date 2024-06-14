import { Injectable, Signal, inject } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelsListMapperService {
  private _channelService = inject(ChannelService);

  public messagingChannelsList: Signal<Channel<DefaultStreamChatGenerics>[] | null> = toSignal(
    this._channelService.channels$.pipe(
      filter((channels): channels is Channel<DefaultStreamChatGenerics>[] => !!channels)
    ),
    { initialValue: null }
  );
}
