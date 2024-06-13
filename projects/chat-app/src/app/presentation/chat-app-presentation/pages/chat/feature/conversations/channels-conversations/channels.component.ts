import { DatePipe } from '@angular/common';
import { Component, Signal, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { AvatarComponent } from '../../../../../../../../../../ui/src/lib/atoms';
import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';
import { SkeletonCircleAndBarsComponent } from '../../../../../../../../../../ui/src/lib/molecules/skeleton-circle-and-bars/skeleton-circle-and-bars.component';
import { ChannelsListMapperService } from '../../../../../../../business/api/channels/channels-list-mapper/channels-list-mapper.service';
import { ChannelListElement } from '../../../../../../../business/api/channels/channels-list-mapper/models/channel-list-element.model';
import { UpdateChannelApiService } from '../../../../../../../business/api/update-channel/update-channel-api.service';
import { ChatLoader } from '../../../../../../../business/chat-loader/chat-loader';
import { ChannelComponent } from '../../../ui/molecules/channel/channel.component';

@Component({
  selector: 'kaa-channels',
  standalone: true,
  templateUrl: './channels.component.html',
  styleUrl: '../_conversations.base.scss',
  imports: [
    SkeletonCircleAndBarsComponent,
    AvatarWithContentComponent,
    AvatarComponent,
    RouterOutlet,
    DatePipe,
    ChannelComponent,
  ],
})
export class ChannelsComponent {
  private _router: Router = inject(Router);

  private _updateChannel = inject(UpdateChannelApiService);

  public chatLoader: ChatLoader = inject(ChatLoader);
  public channelsStore: ChannelsListMapperService = inject(ChannelsListMapperService);

  public isChannelsFetching: Signal<boolean> = computed(() => {
    return !this.channelsStore.channelsList();
  });

  public navigateToChannel(id: string): void {
    this._router.navigate([`chat/${id}`]);
  }

  public updateChannel(channel: ChannelListElement) {
    // this._updateChannel.updateUserConverstationImage(channel);
  }
}
