import { UseCase } from '../base/use-case';
import { AuthReposiotry } from '../repositiores/auth.repository';

import { Observable } from 'rxjs';

export class UserSignOutUseCase implements UseCase<never, Object> {
  constructor(private _authRepository: AuthReposiotry) {}

  execute(): Observable<Object> {
    return this._authRepository.signOut();
  }
}
