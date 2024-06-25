import { Injectable, inject } from '@angular/core';
import { FormatMessageResponse } from 'stream-chat';

import { ChannelsApiService } from '../channels-api.service';

import { Observable, map } from 'rxjs';

@Injectable()
export class ChannelWatchStatusService {
  private _channelApi = inject(ChannelsApiService);

  public markAllChannelsAsStopWatching(): Observable<void> {
    return this._channelApi.getChannelsApi().pipe(
      map(channels =>
        channels.forEach(channel => {
          console.log(channel);
          const status = channel.state.messages.forEach((message: FormatMessageResponse) => message);
          setTimeout(() => {
            console.log(status);
          }, 3000);

          return channel.stopWatching();
        })
      )
    );
  }
}
