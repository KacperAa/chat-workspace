import { UserCredential } from '@angular/fire/auth';

import { SigninCredentials } from '../../auth/models/signin-credentials';
import { SignupCredentials } from '../../auth/models/signup-credentials';

import { Observable } from 'rxjs';

export abstract class AuthReposiotry {
  abstract signIn({ email, password }: SigninCredentials): Observable<UserCredential>;
  abstract signUp({ email, password, displayName }: SignupCredentials): Observable<unknown>;
  abstract signOut(): Observable<Object>;
}
