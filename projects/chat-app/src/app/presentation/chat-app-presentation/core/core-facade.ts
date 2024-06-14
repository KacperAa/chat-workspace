import { Injectable, Signal, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthStore } from '../../../business/api/user-repository/auth/auth.store';
import { AuthHttpService } from '../../../business/api/user-repository/auth/auth-http.service';


@Injectable()
export class CoreFacade {
  private _router = inject(Router);
  private _authStore = inject(AuthStore);
  private _authHttp = inject(AuthHttpService);

  public loggedUser: Signal<User | null> = this._authStore.loggedUser;

  public signOut(): void {
    this._authHttp.signOut().subscribe(() => this._router.navigate(['login']));
  }
}
