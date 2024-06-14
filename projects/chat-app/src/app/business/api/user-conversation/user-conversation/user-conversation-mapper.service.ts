import { Injectable, inject } from '@angular/core';

import { ConversationData } from '../../channel-conversation/channel-conversation-mapper/models/conversation-data.model';
import { ChannelsApiService } from '../../channel-conversation/channels-api.service';
import { UserChannelConversationMapperService } from '../user-channel-list-el-mapper/user-channel-list-el-mapper.service';

import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserConversationMapperService {
  private _channelsApi = inject(ChannelsApiService);

  private _userChannelConversationMapper = inject(UserChannelConversationMapperService);

  public mapChannelToConversation(id: string): Observable<ConversationData> {
    return this._channelsApi.getChannelApi(id).pipe(
      switchMap(channel => {
        return this._userChannelConversationMapper.mapUserChannelPresentation(channel).pipe(
          map(mappedChannel => {
            return {
              id: String(channel.id),
              name: mappedChannel.channelName,
              image: mappedChannel.channelImage,
              last_message_at: mappedChannel.last_message_at,
              messageSets: channel.state.messageSets,
            };
          })
        );
      })
    );
  }
}
