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

  public channelsList: Signal<ChannelListElement[] | null> = toSignal(
    this._channelService.channels$.pipe(
      filter((channels): channels is Channel<DefaultStreamChatGenerics>[] => !!channels),
      map(channels => channels.map(channel => this._mapChannel(channel)))
    ),
    { initialValue: null }
  );

  private _mapChannel(channel: Channel<DefaultStreamChatGenerics>): ChannelListElement {
    const { id, data, state } = channel;
    const latestMessages = state.latestMessages;
    const lastMessage = latestMessages.length > 0 ? latestMessages[latestMessages.length - 1].text : null;

    return {
      id: String(id),
      name: String(data?.name ?? ''),
      image: String(data?.image ?? ''),
      last_message_at: String(data?.last_message_at ?? ''),
      last_message: lastMessage,
    };
  }

  public mockupChannelsList: Signal<Channel<DefaultStreamChatGenerics>[] | null> = toSignal(
    this._channelService.channels$.pipe(
      filter((channels): channels is Channel<DefaultStreamChatGenerics>[] => !!channels)
    ),
    { initialValue: null }
  );
}
