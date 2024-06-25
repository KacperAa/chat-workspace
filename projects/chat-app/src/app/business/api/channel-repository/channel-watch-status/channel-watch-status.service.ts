import { Injectable, inject } from '@angular/core';

import { ChannelsApiService } from '../channels-api.service';

import { Observable, map } from 'rxjs';

@Injectable()
export class ChannelWatchStatusService {
  private _channelApi = inject(ChannelsApiService);

  public markAllChannelsAsStopWatching(): Observable<void> {
    return this._channelApi.getChannelsApi().pipe(
      map(channels =>
        channels.forEach(channel => {
          return channel.stopWatching();
        })
      )
    );
  }
}
