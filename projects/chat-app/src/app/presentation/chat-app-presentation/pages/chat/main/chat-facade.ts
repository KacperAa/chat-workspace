import { Injectable, Signal, inject } from '@angular/core';

import { User } from '../../../../../business/api/user/models/user.model';
import { UsersStore } from '../users-data/users.store';

@Injectable()
export class ChatFacade {
  private readonly _usersStore = inject(UsersStore);

  readonly users: Signal<User[]> = this._usersStore.users;
}
