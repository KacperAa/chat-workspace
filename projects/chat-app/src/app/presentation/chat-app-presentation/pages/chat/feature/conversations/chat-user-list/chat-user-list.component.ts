import { AsyncPipe } from '@angular/common';
import { Component, Signal, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { SkeletonCircleAndBarsComponent } from '../../../../../../../../../../ui/src/lib/molecules/skeleton-circle-and-bars/skeleton-circle-and-bars.component';
import { ChannelsListMapperService } from '../../../../../../../business/api/channels/channels-list-mapper/channels-list-mapper.service';
import { ChatLoader } from '../../../../../../../business/chat-loader/chat-loader';
import { ChannelComponent } from '../../../ui/molecules/channel/channel.component';

@Component({
  selector: 'kaa-channels',
  standalone: true,
  templateUrl: './chat-user-list.component.html',
  styleUrl: '../_conversations.base.scss',
  imports: [SkeletonCircleAndBarsComponent, RouterOutlet, ChannelComponent, AsyncPipe],
})
export class ChannelsComponent {
  private _router: Router = inject(Router);

  public chatLoader: ChatLoader = inject(ChatLoader);
  public channelsStore: ChannelsListMapperService = inject(ChannelsListMapperService);

  public isChannelsFetching: Signal<boolean> = computed(() => {
    return !this.channelsStore.channelsList();
  });

  public navigateToChannel(id: unknown): void {
    this._router.navigate([`chat/${id}`]);
  }
}
