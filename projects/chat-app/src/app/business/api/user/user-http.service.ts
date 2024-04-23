import { Injectable } from '@angular/core';

import { USERS_MOCKUP } from './mockup-data/user.mockup';

import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  public getUsers() {
    return of(USERS_MOCKUP).pipe(delay(500));
  }
}
