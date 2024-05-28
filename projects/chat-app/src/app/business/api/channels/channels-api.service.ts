import { Injectable, inject } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, filter, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelsApiService {
  private _channelService = inject(ChannelService);

  public getChannelApi(id: string): Observable<Channel<DefaultStreamChatGenerics>> {
    return this._channelService.channels$.pipe(
      shareReplay(),
      map(channels => channels?.find(channel => channel.id === id)),
      filter((channel): channel is Channel<DefaultStreamChatGenerics> => !!channel),
      tap(data => {
        console.log(data);
      })
    );
  }
}
