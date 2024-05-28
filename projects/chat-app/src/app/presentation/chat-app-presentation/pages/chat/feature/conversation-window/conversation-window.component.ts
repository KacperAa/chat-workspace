import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ChannelsStore } from '../../../../../../business/api/channels/channels.store';
import { ConversationData } from '../../../../../../business/api/channels/models/conversation-data.model';
import { MessagesCollectionComponent } from '../../ui/organisms/messages-collection/messages-collection.component';
import { ConversationCoreComponent } from '../../ui/templates/conversation-core/conversation-core.component';

import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'kaa-conversation-window',
  standalone: true,
  imports: [MessagesCollectionComponent, ConversationCoreComponent],
  templateUrl: './conversation-window.component.html',
  styleUrl: './conversation-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationWindowComponent implements OnInit {
  private _channelStore = inject(ChannelsStore);
  private _activatedRoute = inject(ActivatedRoute);

  private _channelData!: Observable<ConversationData>;
  public channelData = toSignal(this._channelData, { requireSync: true });

  public ngOnInit(): void {
    this._getChannelData();
  }

  private _getChannelData(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      const channelId = params['id'];
      this._channelData = this._channelStore.getChannel(channelId);
    });
  }
}
