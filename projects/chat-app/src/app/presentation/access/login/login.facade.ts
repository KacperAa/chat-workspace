import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthHttpService } from '../../../business/api/user-repository/auth/auth-http.service';
import { SigninCredentials } from '../../../business/api/user-repository/auth/models/signin-credentials';
import { LoginFormGroup } from './models/login-form-group.model';

@Injectable()
export class LoginFacade {
  private _fb = inject(FormBuilder);
  private _router = inject(Router);
  private _httpAuth = inject(AuthHttpService);
  private _snackBar = inject(MatSnackBar);

  public loginFormGroup: FormGroup<LoginFormGroup> = this._fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  public signIn(): void {
    this._httpAuth.signIn(this._transformFormValueToSend()).subscribe({
      next: () => this._router.navigate(['chat/conversations']),
      error: error =>
        this._snackBar.open(error.message, 'close', {
          duration: 5000,
        }),
    });
  }

  private _transformFormValueToSend(): SigninCredentials {
    const emailControl = this.loginFormGroup.get('email')!;
    const passwordControl = this.loginFormGroup.get('password')!;
    return {
      email: emailControl.value!,
      password: passwordControl.value!,
    };
  }
}
