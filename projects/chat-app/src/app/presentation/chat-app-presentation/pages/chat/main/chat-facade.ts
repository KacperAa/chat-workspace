import { Injectable, Signal, computed, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

import { environment } from '../../../../../../environments/environment';
import { AuthStore } from '../../../../../business/api/auth/auth.store';
import { UserMockup } from '../../../../../business/api/user/models/user.model';
import { UsersStore } from '../users-data/users.store';

@Injectable()
export class ChatFacade {
  private _auth = inject(AuthStore);
  private _usersStore = inject(UsersStore);
  private _channelService: ChannelService = inject(ChannelService);
  private _chatService: ChatClientService = inject(ChatClientService);
  private _streamI18nService: StreamI18nService = inject(StreamI18nService);

  private readonly _authUser: Signal<User> = computed(() => this._auth.loggedUser()!);

  readonly users: Signal<UserMockup[]> = this._usersStore.users;

  public initChat(): void {
    this._chatService.init(environment.stream.key, this._authUser().uid, this._authUser().getIdToken);

    this._streamI18nService.setTranslation();
  }
}
