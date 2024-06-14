import { NgModule } from '@angular/core';

import { AuthReposiotry } from '../domain/repositiores/auth.repository';
import { UserSigninUseCase } from '../domain/usecases/user-signin.usecase';
import { UserSignOutUseCase } from '../domain/usecases/user-signout.usecase';
import { UserSignupUseCase } from '../domain/usecases/user-signup.usecase';
import { AuthImplementationRepository } from './repositiories/auth-implementation.repository';

const userSignInUseCaseFactory = (authRepo: AuthReposiotry) => new UserSigninUseCase(authRepo);
export const userSignInUseCaseProvider = {
  provide: UserSigninUseCase,
  useFactory: userSignInUseCaseFactory,
  deps: [AuthReposiotry],
};

const userSignUpUseCaseFactory = (authRepo: AuthReposiotry) => new UserSignupUseCase(authRepo);
export const userSignUpUseCaseProvider = {
  provide: UserSignupUseCase,
  useFactory: userSignUpUseCaseFactory,
  deps: [AuthReposiotry],
};

const userSignOutUseCaseFactory = (authRepo: AuthReposiotry) => new UserSignOutUseCase(authRepo);
export const userSignOutUseCaseProvider = {
  provide: UserSigninUseCase,
  useFactory: userSignOutUseCaseFactory,
  deps: [AuthReposiotry],
};

@NgModule({
  providers: [
    userSignInUseCaseProvider,
    userSignUpUseCaseProvider,
    userSignOutUseCaseProvider,
    { provide: AuthReposiotry, useClass: AuthImplementationRepository },
  ],
})
export class DataModule {}
