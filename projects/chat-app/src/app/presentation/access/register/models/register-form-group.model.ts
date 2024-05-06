import { FormControl, FormGroup } from '@angular/forms';

export interface RegisterFormGroup {
  contactInformation: FormGroup<ContactInformatinForm>;
  passwords: FormGroup<PasswordsForm>;
}

interface ContactInformatinForm {
  email: FormControl<string | null>;
}

interface PasswordsForm {
  password: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
}
