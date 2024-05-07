import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthHttpService } from '../../../business/api/auth/auth-http.service';
import { SigninCredentials } from '../../../business/api/auth/models/signin-credentials';
import { LoginFormGroup } from './models/login-form-group.model';

@Injectable()
export class LoginFacade {
  private _fb = inject(FormBuilder);
  private _httpAuth = inject(AuthHttpService);

  public loginFormGroup: FormGroup<LoginFormGroup> = this._fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  public signIn(): void {
    this._httpAuth.signIn(this._transformFormValueToSend()).subscribe();
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
