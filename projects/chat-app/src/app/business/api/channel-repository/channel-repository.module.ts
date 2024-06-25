import { NgModule } from '@angular/core';

import { ChannelWatchStatusService } from './channel-watch-status/channel-watch-status.service';
import { ChannelsApiService } from './channels-api.service';
import { ChannelsListMapperService } from './channels-list-mapper/channels-list-mapper.service';
import { UserConversationMapperService } from './conversations/user-conversation-mapper/user-conversation-mapper.service';
import { CreateChannelService } from './create-channel/create-channel.service';
import { UserChannelConversationMapperService } from './user-channel-list-el-mapper/user-channel-list-el-mapper.service';

@NgModule({
  providers: [
    ChannelsApiService,
    CreateChannelService,
    ChannelWatchStatusService,
    ChannelsListMapperService,
    UserConversationMapperService,
    UserChannelConversationMapperService,
  ],
})
export class ChannelRepositoryModule {}
