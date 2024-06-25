import { Component, OnInit, Signal, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { SkeletonCircleAndBarsComponent } from '../../../../../../../../../../ui/src/lib/molecules/skeleton-circle-and-bars/skeleton-circle-and-bars.component';
import { ChannelWatchStatusService } from '../../../../../../../business/api/channel-repository/channel-watch-status/channel-watch-status.service';
import { ChannelsListMapperService } from '../../../../../../../business/api/channel-repository/channels-list-mapper/channels-list-mapper.service';
import { ChannelComponent } from '../../user-channel/user-channel.component';

@Component({
  selector: 'kaa-channels',
  standalone: true,
  templateUrl: './chat-user-list.component.html',
  styleUrl: '../_conversations.base.scss',
  imports: [SkeletonCircleAndBarsComponent, RouterOutlet, ChannelComponent],
})
export class ChannelsComponent implements OnInit {
  public channelsStore = inject(ChannelsListMapperService);

  private _router = inject(Router);
  private _channelWatchStatus = inject(ChannelWatchStatusService);

  public isChannelsFetching: Signal<boolean> = computed(() => {
    return !this.channelsStore.messagingChannelsList();
  });

  public ngOnInit(): void {
    this._channelWatchStatus.markAllChannelsAsStopWatching().subscribe();
  }

  public navigateToChannel(id: unknown): void {
    this._router.navigate([`chat/${id}`]);
  }
}
