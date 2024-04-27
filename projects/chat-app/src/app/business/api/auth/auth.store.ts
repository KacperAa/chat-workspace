import { Injectable, Signal } from '@angular/core';

import { User } from '../user/models/user.model';

import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private _loggedUser = new BehaviorSubject<User | null>(null);

  public readonly loggedUser: Signal<User | null> = toSignal(this._loggedUser, { initialValue: null });

  public setLoggedUser(user: User): void {
    this._loggedUser.next(user);
  }
}
