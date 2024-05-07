import { Injectable, Signal, inject } from '@angular/core';
import { Auth, User, authState } from '@angular/fire/auth';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private _firebaseAuth = inject(Auth);

  readonly loggedUser: Signal<User | null> = toSignal(authState(this._firebaseAuth), { initialValue: null });
}
