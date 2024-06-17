import { Injectable, inject } from '@angular/core';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChannelsApiService } from '../channel-repository/channels-api.service';

import { Observable, map } from 'rxjs';

@Injectable()
export class MessageApiService {
  private _channelsApi = inject(ChannelsApiService);

  public getMessagesFromChannel(channelId: string): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._channelsApi.getChannelApi(channelId).pipe(map(channel => channel.state.messages));
  }
}
