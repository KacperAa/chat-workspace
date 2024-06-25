import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

import { ChannelsApiService } from '../channels-api.service';

import { Observable, map } from 'rxjs';

@Injectable()
export class ChannelWatchStatusService {
  private _channelApi = inject(ChannelsApiService);
  private _auth = inject(Auth);

  private _currentUserUid = this._auth.currentUser?.uid;

  public markAllChannelsAsStopWatching(): Observable<void> {
    return this._channelApi.getChannelsApi().pipe(map(channels => channels.forEach(channel => channel.stopWatching())));
  }
}
