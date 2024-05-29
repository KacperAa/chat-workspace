import { Injectable, Signal, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChannelMapperService } from '../../../../../../business/api/channels/channel-mapper/channel-mapper.service';
import { ConversationData } from '../../../../../../business/api/channels/channel-mapper/models/conversation-data.model';
import { MessagesMappperService } from '../../../../../../business/api/channels/messages-mapper/messages-mapper.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';
import { SendMessageApiService } from '../../../../../../business/api/send-message/send-message-api.service';

@Injectable()
export class ConversationWindowFacade {
  private _activatedRoute = inject(ActivatedRoute);
  private _channelMapper = inject(ChannelMapperService);
  private _messagesMapper = inject(MessagesMappperService);
  private _sendMessageApiService = inject(SendMessageApiService);

  private _channelData$: Observable<ConversationData> = this._initializeChannelData();
  private _messagesCollection$: Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> =
    this._initializeMessages();

  public channelData: Signal<ConversationData | null> = toSignal(this._channelData$, { initialValue: null });
  public messagesCollection: Signal<FormatMessageResponse<DefaultStreamChatGenerics>[] | null> = toSignal(
    this._messagesCollection$,
    { initialValue: null }
  );


  public sendMessage(message: string): void {
    this._sendMessageApiService.sendMessage(message)
  }

  private _initializeChannelData(): Observable<ConversationData> {
    return this._activatedRoute.params.pipe(switchMap((params: Params) => this._fetchChannelData(params['id'])));
  }

  private _initializeMessages(): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._activatedRoute.params.pipe(switchMap((params: Params) => this._fetchMessages(params['id'])));
  }

  private _fetchChannelData(channelId: string): Observable<ConversationData> {
    return this._channelMapper.getChannel(channelId);
  }

  private _fetchMessages(channelId: string): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._messagesMapper.getMessages(channelId);
  }
}
