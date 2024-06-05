import { Injectable, Signal, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AuthHttpService } from '../../../business/api/auth/auth-http.service';
import { AuthStore } from '../../../business/api/auth/auth.store';

@Injectable()
export class CoreFacade {
  private _router = inject(Router);
  private _authStore = inject(AuthStore);
  private _authHttp = inject(AuthHttpService);

  readonly loggedUser: Signal<User | null> = this._authStore.loggedUser;

  public signOut(): void {
    this._authHttp.signOut().subscribe(() => this._router.navigate(['login']));
  }
}
