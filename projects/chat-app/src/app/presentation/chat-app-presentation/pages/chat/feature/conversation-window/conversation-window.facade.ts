import { Injectable, Signal, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChannelsStore } from '../../../../../../business/api/channels/channels.store';
import { ConversationData } from '../../../../../../business/api/channels/models/conversation-data.model';
import { MessagesService } from '../../../../../../business/api/messages/messages.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';

@Injectable()
export class ConversationWindowFacade {
  private _channelStore = inject(ChannelsStore);
  private _activatedRoute = inject(ActivatedRoute);
  private _messagesService = inject(MessagesService);

  private _channelData$: Observable<ConversationData> = this._initializeChannelData();
  private _messagesCollection$: Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> =
    this._initializeMessages();

  public channelData: Signal<ConversationData | null> = toSignal(this._channelData$, { initialValue: null });
  public messagesCollection: Signal<FormatMessageResponse<DefaultStreamChatGenerics>[] | null> = toSignal(
    this._messagesCollection$,
    { initialValue: null }
  );

  private _initializeChannelData(): Observable<ConversationData> {
    return this._activatedRoute.params.pipe(switchMap((params: Params) => this._fetchChannelData(params['id'])));
  }

  private _initializeMessages(): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._activatedRoute.params.pipe(switchMap((params: Params) => this._fetchMessages(params['id'])));
  }

  private _fetchChannelData(channelId: string): Observable<ConversationData> {
    return this._channelStore.getChannel(channelId);
  }

  private _fetchMessages(channelId: string): Observable<FormatMessageResponse<DefaultStreamChatGenerics>[]> {
    return this._messagesService.getMessages(channelId);
  }
}
