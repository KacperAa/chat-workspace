import { Injectable, inject } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelsApiService {
  private _channelService = inject(ChannelService);

  public getChannelApi(id: string): Observable<Channel<DefaultStreamChatGenerics>> {
    return this._channelService.channels$.pipe(
      map(channels => channels?.find(channel => channel.id === id)),
      filter((channel): channel is Channel<DefaultStreamChatGenerics> => !!channel)
    );
  }

  public getChannelsApi(): Observable<Channel<DefaultStreamChatGenerics>[]> {
    return this._channelService.channels$.pipe(
      filter((channels): channels is Channel<DefaultStreamChatGenerics>[] => channels !== undefined)
    );
  }
}
