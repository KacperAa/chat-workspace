import { Injectable, Signal, inject } from '@angular/core';

import { MappedUserFields } from '../../../../../business/api/auth/models/mapped-user-fields.model';
import { FriendsService } from '../../../../../business/api/friends/friends.service';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class ChatFacade {
  private _friendsList = inject(FriendsService);

  public friendsList: Signal<MappedUserFields[]> = toSignal(this._friendsList.getFriends(), { initialValue: [] });
}
