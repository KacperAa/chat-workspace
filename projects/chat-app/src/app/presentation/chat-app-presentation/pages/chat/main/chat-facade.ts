import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

import { environment } from '../../../../../../environments/environment';
import { AuthHttpService } from '../../../../../business/api/auth/auth-http.service';
import { AuthStore } from '../../../../../business/api/auth/auth.store';
import { UserMockup } from '../../../../../business/api/user/models/user.model';
import { UsersStore } from '../users-data/users.store';

import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ChatFacade {
  private _authStore = inject(AuthStore);
  private _usersStore = inject(UsersStore);
  private _authHttp = inject(AuthHttpService);
  private _channelService: ChannelService = inject(ChannelService);
  private _chatService: ChatClientService = inject(ChatClientService);
  private _streamI18nService: StreamI18nService = inject(StreamI18nService);

  private _chatIsReady: WritableSignal<boolean> = signal(false);

  readonly chatIsReady: Signal<boolean> = this._chatIsReady.asReadonly();

  private readonly _authUser: Signal<User> = computed(() => this._authStore.loggedUser()!);

  readonly users: Signal<UserMockup[]> = this._usersStore.users;

  public initChat(): void {
    this._streamI18nService.setTranslation();

    this._authHttp.getStreamToken().pipe(
      switchMap(streamToken => this._chatService.init(environment.stream.key, this._authUser().uid, streamToken)),
      switchMap(() =>
        this._channelService.init({
          type: 'messaging',
          members: { $in: [this._authUser().uid] },
        })
      ),
      map(() => this._chatIsReady.set(true)),
      catchError(() => of(this._chatIsReady.set(false)))
    );
  }
}
