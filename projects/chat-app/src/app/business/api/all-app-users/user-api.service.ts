import { Injectable, inject } from '@angular/core';
import { child, get } from '@angular/fire/database';
import { Database, ref } from '@angular/fire/database';
import { ChatClientService } from 'stream-chat-angular';

import { MappedUserFields } from '../auth/models/mapped-user-fields.model';
import { UserMergedResponse } from './models/user-merged-response.model';

import { Observable, forkJoin, from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private _fireDatabase = inject(Database);
  private _chatService = inject(ChatClientService);

  public getUsersByFilter(queryString: string): Observable<UserMergedResponse[]> {
    return from(this._chatService.autocompleteUsers(queryString)).pipe(
      switchMap(users => {
        const userObservables = users.map(user =>
          this._getFireUsersDatabase(user.id).pipe(
            map(fireUser => ({
              ...user,
              photoURL: fireUser?.photoURL || null,
            }))
          )
        );

        return forkJoin(userObservables);
      })
    );
  }

  private _getFireUsersDatabase(uid: string): Observable<MappedUserFields> {
    const dbRef = ref(this._fireDatabase);
    return from(
      get(child(dbRef, `users/${uid}`)).then(snapshot => {
        return snapshot.val();
      })
    );
  }
}
