import { Injectable, inject } from '@angular/core';

import { ChannelsApiService } from '../../channels-api.service';
import { UserChannelConversationMapperService } from '../../user-channel-list-el-mapper/user-channel-list-el-mapper.service';
import { ConversationData } from '../models/conversation-data.model';

import { Observable, map, switchMap } from 'rxjs';

@Injectable()
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
