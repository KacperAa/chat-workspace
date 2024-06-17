import { Injectable, inject } from '@angular/core';
import { child, get } from '@angular/fire/database';
import { Database, ref } from '@angular/fire/database';
import { ChatClientService } from 'stream-chat-angular';

import { MappedUserFields } from '../auth-repository/models/mapped-user-fields.model';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private _fireDatabase = inject(Database);
  private _chatService = inject(ChatClientService);

  public getUserFormChat(userId: string) {
    return from(this._chatService.chatClient.queryUsers({ id: userId }));
  }

  public getFireUserFromDatabase(uid: string): Observable<MappedUserFields> {
    const dbRef = ref(this._fireDatabase);
    return from(
      get(child(dbRef, `users/${uid}`)).then(snapshot => {
        return snapshot.val();
      })
    );
  }
}
