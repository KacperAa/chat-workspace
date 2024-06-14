import { UseCase } from '../base/use-case';
import { AuthReposiotry } from '../repositiores/auth.repository';

import { Observable } from 'rxjs';

export class UserSignupUseCase implements UseCase<{ email: string; password: string; displayName: string }, unknown> {
  constructor(private _authRepository: AuthReposiotry) {}

  execute(params: { email: string; password: string; displayName: string }): Observable<unknown> {
    return this._authRepository.signUp(params);
  }
}
