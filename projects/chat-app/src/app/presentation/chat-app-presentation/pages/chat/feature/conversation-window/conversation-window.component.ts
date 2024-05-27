import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MessagesCollectionComponent } from '../../ui/organisms/messages-collection/messages-collection.component';
import { ConversationCoreComponent } from '../../ui/templates/conversation-core/conversation-core.component';

@Component({
  selector: 'kaa-conversation-window',
  standalone: true,
  imports: [MessagesCollectionComponent, ConversationCoreComponent],
  templateUrl: './conversation-window.component.html',
  styleUrl: './conversation-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationWindowComponent {}
