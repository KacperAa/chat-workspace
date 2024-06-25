import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';

import { AvatarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { SkeletonBarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import {
  AvatarWithTextCloudComponent,
  TextCloudComponent,
  TypingIndicatorComponent,
} from '../../../../../../../../../ui/src/lib/molecules';
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
    ScrollingModule,
    AvatarComponent,
    CloudPositionPipe,
    TextCloudComponent,
    SkeletonBarComponent,
    TypingIndicatorComponent,
    ConversationCoreComponent,
    AvatarWithTextCloudComponent,
  ],
})
export class ConversationWindowComponent implements AfterViewInit {
  protected conversationWindowFacade = inject(ConversationWindowFacade);
  public virtualScrollRef = viewChild.required(CdkVirtualScrollViewport);

  public ngAfterViewInit(): void {
    this.conversationWindowFacade.scrollMessagesContainerToBottom(this.virtualScrollRef()).subscribe();
  }
}
