import { Injectable, Signal, inject } from '@angular/core';

import { AuthStore } from '../../../business/api/auth/auth.store';
import { User } from '../../../business/api/user/models/user.model';

@Injectable()
export class CoreFacade {
  private _authStore = inject(AuthStore);

  public loggedUser: Signal<User | null> = this._authStore.loggedUser;
}
