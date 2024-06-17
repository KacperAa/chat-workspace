import { Injectable, inject } from '@angular/core';
import { ChatClientService } from 'stream-chat-angular';

import { UserMergedResponse } from '../models/user-merged-response.model';
import { UserApiService } from '../user-api.service';

import { Observable, forkJoin, from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterUsersService {
  private _userApi = inject(UserApiService);
  private _chatService = inject(ChatClientService);

  public getUsersByFilter(queryString: string): Observable<UserMergedResponse[]> {
    return from(this._chatService.autocompleteUsers(queryString)).pipe(
      switchMap(users => {
        const userObservables = users.map(user =>
          this._userApi.getFireUserFromDatabase(user.id).pipe(
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
}
