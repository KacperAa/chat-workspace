import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TextCloudComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { SkeletonBarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { VerticalScrollComponent } from '../../../../../../../../../ui/src/lib/organisms';
import { ConversationCoreComponent } from '../../ui/templates/conversation-core/conversation-core.component';
import { ConversationWindowFacade } from './conversation-window.facade';

@Component({
  selector: 'kaa-conversation-window',
  standalone: true,
  imports: [ConversationCoreComponent, AsyncPipe, VerticalScrollComponent, TextCloudComponent, SkeletonBarComponent],
  providers: [ConversationWindowFacade],
  templateUrl: './conversation-window.component.html',
  styleUrl: './conversation-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationWindowComponent {
  protected conversationWindowFacade = inject(ConversationWindowFacade);
}
