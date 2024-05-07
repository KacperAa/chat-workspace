import { Injectable, Signal, inject } from '@angular/core';
import { User } from '@angular/fire/auth';

import { AuthStore } from '../../../business/api/auth/auth.store';

@Injectable()
export class CoreFacade {
  private _authStore = inject(AuthStore);

  readonly loggedUser: Signal<User | null> = this._authStore.loggedUser;
}
