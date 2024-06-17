import { Injectable, inject } from '@angular/core';
import { ChannelService } from 'stream-chat-angular';

import { ChannelsApiService } from '../../channels-api.service';
import { ConversationData } from './models/conversation-data.model';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelMapperService {
  private _channelService = inject(ChannelService);
  private _channelsApi = inject(ChannelsApiService);

  public getChannel(id: string): Observable<ConversationData> {
    return this._channelsApi.getChannelApi(id).pipe(
      map(channel => {
        this._channelService.setAsActiveChannel(channel);
        return {
          id: String(channel.id),
          name: String(channel.data?.name ?? ''),
          image: String(channel.data?.image ?? ''),
          last_message_at: String(channel.data?.last_message_at ?? ''),
          messageSets: channel.state.messageSets,
        };
      })
    );
  }
}
