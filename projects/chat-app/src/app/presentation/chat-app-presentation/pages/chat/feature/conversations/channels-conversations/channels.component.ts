import { Component, Signal, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { AvatarComponent } from '../../../../../../../../../../ui/src/lib/atoms';
import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';
import { SkeletonCircleAndBarsComponent } from '../../../../../../../../../../ui/src/lib/molecules/skeleton-circle-and-bars/skeleton-circle-and-bars.component';
import { ChannelsStore } from '../../../../../../../business/api/channels/channels.store';
import { ChatLoader } from '../../../../../chat-loader/chat-loader';

@Component({
  selector: 'kaa-channels',
  standalone: true,
  templateUrl: './channels.component.html',
  styleUrl: '../_conversations.base.scss',
  imports: [SkeletonCircleAndBarsComponent, AvatarWithContentComponent, AvatarComponent, RouterOutlet],
})
export class ChannelsComponent {
  private router: Router = inject(Router);
  public chatLoader: ChatLoader = inject(ChatLoader);
  public channelsStore: ChannelsStore = inject(ChannelsStore);

  public isChannelsFetching: Signal<boolean> = computed(() => {
    return !this.channelsStore.mappedChannelsData();
  });

  public navigateToChannel(id: unknown): void {
    console.log(id);
    this.router.navigate(['chat/1']);
  }
}
