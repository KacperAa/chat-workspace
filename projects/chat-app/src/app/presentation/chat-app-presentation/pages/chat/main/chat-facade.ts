import { Injectable, Signal, inject } from '@angular/core';

import { UserMockup } from '../../../../../business/api/user/models/user.model';
import { UsersStore } from '../../../../../business/api/user/users.store';

@Injectable()
export class ChatFacade {
  private _usersStore = inject(UsersStore);

  readonly users: Signal<UserMockup[]> = this._usersStore.users;
}
