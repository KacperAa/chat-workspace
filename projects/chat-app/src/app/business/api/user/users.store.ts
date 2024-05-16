import { Injectable, Signal } from '@angular/core';

import { UserMockup } from './models/user.model';

import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersStore {
  private _users = new BehaviorSubject<UserMockup[]>([]);

  public users: Signal<UserMockup[]> = toSignal(this._users, { initialValue: [] });

  public setUsers(users: UserMockup[]): void {
    this._users.next(users);
  }
}
