import { FormControl } from '@angular/forms';

import { LoginFormGroup } from '../../login/models/login-form-group.model';

export interface RegisterFormGroup extends LoginFormGroup {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
}
