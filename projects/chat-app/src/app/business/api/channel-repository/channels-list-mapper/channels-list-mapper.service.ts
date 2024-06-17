import { Injectable, Signal, inject } from '@angular/core';
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChannelsApiService } from '../channels-api.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, map } from 'rxjs';

@Injectable()
export class ChannelsListMapperService {
  private _channelApi = inject(ChannelsApiService);

  public messagingChannelsList: Signal<Channel<DefaultStreamChatGenerics>[] | null> = toSignal(
    this._filterMessagingChannelsType(),
    { initialValue: null }
  );

  private _filterMessagingChannelsType(): Observable<Channel<DefaultStreamChatGenerics>[]> {
    return this._channelApi.getChannelsApi().pipe(
      map(channels => {
        return channels.filter(channel => (channel.type = 'messaging'));
      })
    );
  }
}
