import { Injectable, Signal, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ConversationData } from '../../../../../../business/api/channel-repository/conversations/models/conversation-data.model';
import { UserConversationMapperService } from '../../../../../../business/api/channel-repository/conversations/user-conversation-mapper/user-conversation-mapper.service';
import { MessageMapperService } from '../../../../../../business/api/message-repository/message-mapper/message-mapper.service';
import { MessageResponseMapper } from '../../../../../../business/api/message-repository/message-mapper/models/message-response-mapper.model';
import { SendMessageApiService } from '../../../../../../business/api/message-repository/send-message/send-message-api.service';
import { TypingService } from '../../../../../../business/api/message-repository/typing/typing.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';

@Injectable()
export class ConversationWindowFacade {
  private _typing = inject(TypingService);
  private _activatedRoute = inject(ActivatedRoute);
  private _messageMapper = inject(MessageMapperService);
  private _sendMessageApiService = inject(SendMessageApiService);
  private _conversationMapper = inject(UserConversationMapperService);

  public isTyping: Signal<boolean> = this._typing.isTyping;

  private _channelData$: Observable<ConversationData> = this._initializeChannelData();
  private _messagesCollection$: Observable<MessageResponseMapper[]> = this._initializeMessages();

  public channelData: Signal<ConversationData | null> = toSignal(this._channelData$, { initialValue: null });
  public messagesCollection: Signal<MessageResponseMapper[] | null> = toSignal(this._messagesCollection$, {
    initialValue: null,
  });

  public watchChannelTyping(): Observable<void> {
    return this._typing.watchChannelTyping();
  }

  public sendMessage(message: string): void {
    this._sendMessageApiService.sendMessage(message);
  }

  public channelTyping(): void {
    this._typing.channelTyping();
  }

  public channelStopTyping(): void {
    this._typing.channelStopTyping();
  }

  private _initializeChannelData(): Observable<ConversationData> {
    return this._activatedRoute.params.pipe(switchMap((params: Params) => this._fetchChannelData(params['id'])));
  }

  private _initializeMessages(): Observable<MessageResponseMapper[]> {
    return this._activatedRoute.params.pipe(switchMap((params: Params) => this._fetchMessages(params['id'])));
  }

  private _fetchChannelData(channelId: string): Observable<ConversationData> {
    return this._conversationMapper.mapChannelToConversation(channelId);
  }

  private _fetchMessages(channelId: string): Observable<MessageResponseMapper[]> {
    return this._messageMapper.mapMessages(channelId);
  }
}
