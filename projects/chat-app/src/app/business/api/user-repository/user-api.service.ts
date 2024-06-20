import { Injectable, inject } from '@angular/core';
import { get } from '@angular/fire/database';
import { Database, ref } from '@angular/fire/database';
import { ChatClientService } from 'stream-chat-angular';

import { MappedUserFields } from '../auth-repository/models/mapped-user-fields.model';

import { Observable, from } from 'rxjs';

@Injectable()
export class UserApiService {
  private _fireDatabase = inject(Database);
  private _chatService = inject(ChatClientService);

  public getUserFormChat(userId: string) {
    return from(this._chatService.chatClient.queryUsers({ id: userId }));
  }

  public getFireUserFromDatabase(uid: string): Observable<MappedUserFields> {
    const userRef = ref(this._fireDatabase, `users/${uid}`);
    return from(get(userRef).then(snapshot => snapshot.val()));
  }

  public getFireUserPhotoFromDatabase(uid: string): Observable<string> {
    const photoRef = ref(this._fireDatabase, `users/${uid}/photoURL`);
    return from(get(photoRef).then(snapshot => snapshot.val()));
  }
}
