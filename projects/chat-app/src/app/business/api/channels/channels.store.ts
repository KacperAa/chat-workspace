import { Injectable, Signal, computed, inject } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChannelListElement } from './models/channel-list-element.model';

import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelsStore {
  private _channelService = inject(ChannelService);

  private _mappedChannels$ = this._channelService.channels$.pipe(
    filter((channels): channels is Channel<DefaultStreamChatGenerics>[] => !!channels),
    map(channels =>
      channels!.map(channel => ({
        name: channel.data?.name,
        image: channel.data?.image,
        last_message_at: channel.data?.last_message_at,
      }))
    )
  );

  readonly mappedChannelsData: Signal<ChannelListElement[]> = toSignal(this._mappedChannels$, { initialValue: [] });
}
