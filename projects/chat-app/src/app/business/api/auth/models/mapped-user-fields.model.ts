import { User } from '@angular/fire/auth';

type BasicUserFields = Pick<User, 'displayName' | 'photoURL' | 'email'>;

export type MappedUserFields = {
  [P in keyof BasicUserFields]: P extends 'photoURL' ? string | null : string;
};
