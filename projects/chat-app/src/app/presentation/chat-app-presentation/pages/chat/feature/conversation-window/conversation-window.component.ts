import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { TextCloudComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { SkeletonBarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { VerticalScrollComponent } from '../../../../../../../../../ui/src/lib/organisms';
import { ChannelsStore } from '../../../../../../business/api/channels/channels.store';
import { ConversationData } from '../../../../../../business/api/channels/models/conversation-data.model';
import { MessagesService } from '../../../../../../business/api/messages/messages.service';
import { ConversationCoreComponent } from '../../ui/templates/conversation-core/conversation-core.component';

import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'kaa-conversation-window',
  standalone: true,
  imports: [ConversationCoreComponent, AsyncPipe, VerticalScrollComponent, TextCloudComponent, SkeletonBarComponent],
  templateUrl: './conversation-window.component.html',
  styleUrl: './conversation-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationWindowComponent implements OnInit {
  private _channelStore = inject(ChannelsStore);
  private _activatedRoute = inject(ActivatedRoute);
  private _messagesService = inject(MessagesService);

  public channelData$!: Observable<ConversationData>;
  public messagesCollection$!: Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]>;

  public ngOnInit(): void {
    this.channelData$ = this._getChannelData();
    this.messagesCollection$ = this._getMessages();
  }

  private _getChannelData(): Observable<ConversationData> {
    return this._activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const channelId = params['id'];
        return this._channelStore.getChannel(channelId);
      })
    );
  }

  private _getMessages() {
    return this._activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const channelId = params['id'];
        return this._messagesService.getMessages(channelId);
      })
    );
  }
}
