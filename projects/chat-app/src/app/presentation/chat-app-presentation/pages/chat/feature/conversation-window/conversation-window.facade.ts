import { Injectable, Signal, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ConversationData } from '../../../../../../business/api/channel-repository/conversations/models/conversation-data.model';
import { UserConversationMapperService } from '../../../../../../business/api/channel-repository/conversations/user-conversation-mapper/user-conversation-mapper.service';
import { MessageApiService } from '../../../../../../business/api/message-repository/message-api.service';
import { SendMessageApiService } from '../../../../../../business/api/message-repository/send-message/send-message-api.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';

@Injectable()
export class ConversationWindowFacade {
  private _activatedRoute = inject(ActivatedRoute);
  private _messagesApi = inject(MessageApiService);
  private _sendMessageApiService = inject(SendMessageApiService);
  private _conversationMapper = inject(UserConversationMapperService);

  private _channelData$: Observable<ConversationData> = this._initializeChannelData();
  private _messagesCollection$: Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> =
    this._initializeMessages();

  public channelData: Signal<ConversationData | null> = toSignal(this._channelData$, { initialValue: null });
  public messagesCollection: Signal<FormatMessageResponse<DefaultStreamChatGenerics>[] | null> = toSignal(
    this._messagesCollection$,
    { initialValue: null }
  );

  public sendMessage(message: string): void {
    this._sendMessageApiService.sendMessage(message);
  }

  private _initializeChannelData(): Observable<ConversationData> {
    return this._activatedRoute.params.pipe(switchMap((params: Params) => this._fetchChannelData(params['id'])));
  }

  private _initializeMessages(): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._activatedRoute.params.pipe(switchMap((params: Params) => this._fetchMessages(params['id'])));
  }

  private _fetchChannelData(channelId: string): Observable<ConversationData> {
    return this._conversationMapper.mapChannelToConversation(channelId);
  }

  private _fetchMessages(channelId: string): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._messagesApi.getMessagesFromChannel(channelId);
  }
}
