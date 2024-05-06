import { SigninCredentials } from './signin-credentials';

export interface SignupCredentials extends SigninCredentials {
  displayName: string;
}
