import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TextCloudComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { SkeletonBarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { VerticalScrollComponent } from '../../../../../../../../../ui/src/lib/organisms';
import { ConversationCoreComponent } from '../../ui/templates/conversation-core/conversation-core.component';
import { ConversationWindowFacade } from './conversation-window.facade';
import { CloudColorPipe } from './pipes/cloud-color.pipe';

@Component({
  selector: 'kaa-conversation-window',
  standalone: true,
  providers: [ConversationWindowFacade],
  templateUrl: './conversation-window.component.html',
  styleUrl: './conversation-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CloudColorPipe,
    TextCloudComponent,
    SkeletonBarComponent,
    VerticalScrollComponent,
    ConversationCoreComponent,
  ],
})
export class ConversationWindowComponent {
  protected conversationWindowFacade = inject(ConversationWindowFacade);
}
