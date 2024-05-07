import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { matchValidator } from '@validators/matchValidator';

import { AuthHttpService } from '../../../business/api/auth/auth-http.service';
import { SignupCredentials } from '../../../business/api/auth/models/signup-credentials';
import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';
import { RegisterFormGroup } from './models/register-form-group.model';
import { FormPartComponent } from './ui/molecules/form-field/form-part.component';
import { FormPartProperties } from './ui/molecules/form-field/models/form-part-properties.model';

const MATERIAL_IMPORTS = [MatButton, MatLabel, MatFormField, MatInput, MatSnackBarModule];

@Component({
  selector: 'kaa-register',
  standalone: true,
  imports: [MATERIAL_IMPORTS, AuthCoreComponent, ReactiveFormsModule, FormPartComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private _fb = inject(FormBuilder);
  private _router = inject(Router);
  private _snackBar = inject(MatSnackBar);
  private _authHttp = inject(AuthHttpService);

  public registerFormGroup: FormGroup<RegisterFormGroup> = this._fb.group({
    fullName: this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    }),
    contactInformation: this._fb.group({
      email: ['', [Validators.required]],
    }),
    passwords: this._fb.group(
      {
        password: ['', [Validators.required]],
        repeatPassword: ['', Validators.required],
      },
      { validators: [matchValidator('password', 'repeatPassword')], updateOn: 'submit' }
    ),
  });

  public fullNameControlProperties: FormPartProperties[] = [
    { label: 'Full Name', placeholder: 'Full name...' },
    {
      label: 'Last Name',
      placeholder: 'Last name...',
    },
  ];

  public contactInformationControlProperties: FormPartProperties[] = [{ label: 'Email', placeholder: 'Email...' }];

  public passwordsControlProperties: FormPartProperties[] = [
    { label: 'Password', placeholder: 'Password...' },
    {
      label: 'Repeat password',
      placeholder: 'Repeat password...',
    },
  ];

  public register(): void {
    if (this.registerFormGroup.valid) {
      this._authHttp.signUp(this._transformFormValueToSend()).subscribe({
        next: () => this._router.navigate(['chat']),
        error: error =>
          this._snackBar.open(error.message, 'close', {
            duration: 5000,
          }),
      });
    }
    this.registerFormGroup.markAllAsTouched();
  }

  private _transformFormValueToSend(): SignupCredentials {
    const emailControl = this.registerFormGroup.get('contactInformation')!;
    const passwordsControl = this.registerFormGroup.get('passwords')!;
    const fullNameControl = this.registerFormGroup.get('fullName')!;

    return {
      email: emailControl.value.email!,
      password: passwordsControl.value.password!,
      displayName: `${fullNameControl.value.firstName!} ${fullNameControl.value.lastName!}`,
    };
  }
}
