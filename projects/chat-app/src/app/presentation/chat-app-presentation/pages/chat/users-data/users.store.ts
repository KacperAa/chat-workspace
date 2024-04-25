import { Injectable, Signal } from '@angular/core';

import { User } from '../../../../../business/api/user/models/user.model';

import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersStore {
  private _users = new BehaviorSubject<User[]>([]);

  public users: Signal<User[]> = toSignal(this._users, { initialValue: [] });

  public setUsers(users: User[]): void {
    this._users.next(users);
  }
}
