import { Injectable, Signal, computed, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

import { environment } from '../../../../../../environments/environment';
import { AuthHttpService } from '../../../../../business/api/auth/auth-http.service';
import { AuthStore } from '../../../../../business/api/auth/auth.store';
import { UserMockup } from '../../../../../business/api/user/models/user.model';
import { UsersStore } from '../../../../../business/api/user/users.store';
import { ChatLoader } from '../../../chat-loader/chat-loader';

import { catchError, switchMap, tap } from 'rxjs';

@Injectable()
export class ChatFacade {
  private _authStore = inject(AuthStore);
  private _usersStore = inject(UsersStore);
  private _authHttp = inject(AuthHttpService);
  private _chatLoader: ChatLoader = inject(ChatLoader);
  private _channelService: ChannelService = inject(ChannelService);
  private _chatService: ChatClientService = inject(ChatClientService);
  private _streamI18nService: StreamI18nService = inject(StreamI18nService);

  private readonly _authUser: Signal<User> = computed(() => this._authStore.loggedUser()!);

  readonly users: Signal<UserMockup[]> = this._usersStore.users;

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
