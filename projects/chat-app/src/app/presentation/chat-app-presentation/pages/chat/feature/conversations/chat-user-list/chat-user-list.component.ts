import { Component, Signal, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { SkeletonCircleAndBarsComponent } from '../../../../../../../../../../ui/src/lib/molecules/skeleton-circle-and-bars/skeleton-circle-and-bars.component';
import { ChannelsListMapperService } from '../../../../../../../business/api/channel-repository/channels-list-mapper/channels-list-mapper.service';
import { ChannelComponent } from '../../user-channel/user-channel.component';

@Component({
  selector: 'kaa-channels',
  standalone: true,
  templateUrl: './chat-user-list.component.html',
  styleUrl: '../_conversations.base.scss',
  imports: [SkeletonCircleAndBarsComponent, RouterOutlet, ChannelComponent],
})
export class ChannelsComponent {
  private _router = inject(Router);

  public channelsStore = inject(ChannelsListMapperService);

  public isChannelsFetching: Signal<boolean> = computed(() => {
    return !this.channelsStore.messagingChannelsList();
  });

  public navigateToChannel(id: unknown): void {
    this._router.navigate([`chat/${id}`]);
  }
}
