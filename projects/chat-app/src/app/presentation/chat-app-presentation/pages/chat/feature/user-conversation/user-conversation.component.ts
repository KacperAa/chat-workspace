import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MessagesCollectionComponent } from '../../ui/organisms/messages-collection/messages-collection.component';
import { ConversationCoreComponent } from '../../ui/templates/conversation-core/conversation-core.component';

@Component({
  selector: 'kaa-user-conversation',
  standalone: true,
  imports: [MessagesCollectionComponent, ConversationCoreComponent],
  templateUrl: './user-conversation.component.html',
  styleUrl: './user-conversation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserConversationComponent {}
