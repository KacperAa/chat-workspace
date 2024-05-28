import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ChannelsStore } from '../../../../../../business/api/channels/channels.store';
import { ConversationData } from '../../../../../../business/api/channels/models/conversation-data.model';
import { MessagesCollectionComponent } from '../../ui/organisms/messages-collection/messages-collection.component';
import { ConversationCoreComponent } from '../../ui/templates/conversation-core/conversation-core.component';

import { Observable } from 'rxjs';

@Component({
  selector: 'kaa-conversation-window',
  standalone: true,
  imports: [MessagesCollectionComponent, ConversationCoreComponent],
  templateUrl: './conversation-window.component.html',
  styleUrl: './conversation-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationWindowComponent {
  private _channelStore = inject(ChannelsStore);

  public channelData!: Observable<ConversationData>;
}
