import { Injectable, Signal, inject } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChannelListElement } from './models/channel-list-element.model';

import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelsListMapperService {
  private _channelService = inject(ChannelService);

  public mappedChannelsData: Signal<ChannelListElement[] | undefined> = toSignal(
    this._channelService.channels$.pipe(
      filter((channels): channels is Channel<DefaultStreamChatGenerics>[] => !!channels),
      map(channels =>
        channels.map(channel => ({
          id: String(channel.id),
          name: String(channel.data?.name ?? ''),
          image: String(channel.data?.image ?? ''),
          last_message_at: String(channel.data?.last_message_at ?? ''),
        }))
      )
    )
  );
}
