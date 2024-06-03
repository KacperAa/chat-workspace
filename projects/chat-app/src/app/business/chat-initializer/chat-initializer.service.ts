import { Injectable, Signal, computed, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

import { environment } from '../../../environments/environment';
import { AuthHttpService } from '../api/auth/auth-http.service';
import { AuthStore } from '../api/auth/auth.store';
import { ChatLoader } from '../chat-loader/chat-loader';

import { catchError, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatInitializerService {
  private _authStore = inject(AuthStore);
  private _authHttp = inject(AuthHttpService);
  private _chatLoader: ChatLoader = inject(ChatLoader);
  private _channelService: ChannelService = inject(ChannelService);
  private _chatService: ChatClientService = inject(ChatClientService);
  private _streamI18nService: StreamI18nService = inject(StreamI18nService);

  private readonly _authUser: Signal<User> = computed(() => this._authStore.loggedUser()!);

  public initChat(): void {
    this._streamI18nService.setTranslation();

    this._authHttp
      .getStreamToken()
      .pipe(
        switchMap(streamToken => this._chatService.init(environment.stream.key, this._authUser().uid, streamToken)),
        switchMap(() =>
          this._channelService.init({
            type: 'messaging',
            members: { $in: [this._authUser().uid] },
          })
        ),
        tap(() => {
          this._chatLoader.patchIsChatLoadedState(true);
        }),
        catchError((): never => {
          this._chatLoader.patchIsChatLoadedState(false);

          throw Error('Can not loaded chat page');
        })
      )
      .subscribe();
  }
}
