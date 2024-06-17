import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TextCloudComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { SkeletonBarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { TypingIndicatorComponent } from '../../../../../../../../../ui/src/lib/molecules';
import { VerticalScrollComponent } from '../../../../../../../../../ui/src/lib/organisms';
import { ConversationCoreComponent } from '../../ui/templates/conversation-core/conversation-core.component';
import { ConversationWindowFacade } from './conversation-window.facade';
import { CloudColorPipe } from './pipes/cloud-color.pipe';
import { CloudPositionPipe } from './pipes/cloud-position.pipe';

@Component({
  selector: 'kaa-conversation-window',
  standalone: true,
  providers: [ConversationWindowFacade],
  templateUrl: './conversation-window.component.html',
  styleUrl: './conversation-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CloudColorPipe,
    CloudPositionPipe,
    TextCloudComponent,
    SkeletonBarComponent,
    VerticalScrollComponent,
    TypingIndicatorComponent,
    ConversationCoreComponent,
  ],
})
export class ConversationWindowComponent {
  protected conversationWindowFacade = inject(ConversationWindowFacade);
}
