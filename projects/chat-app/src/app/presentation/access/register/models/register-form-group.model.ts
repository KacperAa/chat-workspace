import { FormControl, FormGroup } from '@angular/forms';

export interface RegisterFormGroup {
  fullName: FormGroup<FullNameForm>;
  contactInformation: FormGroup<ContactInformatinForm>;
  passwords: FormGroup<PasswordsForm>;
}

interface FullNameForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
}

interface ContactInformatinForm {
  email: FormControl<string | null>;
}

interface PasswordsForm {
  password: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
}
