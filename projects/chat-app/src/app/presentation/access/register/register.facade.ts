import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { matchValidator } from '@validators/matchValidator';

import { AuthHttpService } from '../../../business/api/auth/auth-http.service';
import { SignupCredentials } from '../../../business/api/auth/models/signup-credentials';
import { RegisterFormGroup } from './models/register-form-group.model';

@Injectable()
export class RegisterFacade {
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
