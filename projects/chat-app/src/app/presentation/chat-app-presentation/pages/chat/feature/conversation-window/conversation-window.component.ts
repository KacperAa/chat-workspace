import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ChannelService } from 'stream-chat-angular';

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
    AsyncPipe,

    CloudColorPipe,
    CloudPositionPipe,
    TextCloudComponent,
    SkeletonBarComponent,
    VerticalScrollComponent,
    TypingIndicatorComponent,
    ConversationCoreComponent,
  ],
})
export class ConversationWindowComponent implements OnInit {
  channel = inject(ChannelService);

  public activeChannel$ = this.channel.activeChannel$;

  protected conversationWindowFacade = inject(ConversationWindowFacade);

  public ngOnInit(): void {
    this.conversationWindowFacade.watchChannelTyping();
  }
}
