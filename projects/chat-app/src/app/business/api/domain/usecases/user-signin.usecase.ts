import { UserCredential } from '@angular/fire/auth';

import { UseCase } from '../base/use-case';
import { AuthReposiotry } from '../repositiores/auth.repository';

import { Observable } from 'rxjs';

export class UserSigninUseCase implements UseCase<{ email: string; password: string }, UserCredential> {
  constructor(private _authRepository: AuthReposiotry) {}

  execute(params: { email: string; password: string }): Observable<UserCredential> {
    return this._authRepository.signIn(params);
  }
}
