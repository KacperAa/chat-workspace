import { Injectable, inject } from '@angular/core';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChannelsApiService } from '../../channel-repository/channels-api.service';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageMapperService {
  private _channelsApi = inject(ChannelsApiService);

  public getMessages(id: string): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._channelsApi.getChannelApi(id).pipe(map(channel => channel.state.messages));
  }
}
