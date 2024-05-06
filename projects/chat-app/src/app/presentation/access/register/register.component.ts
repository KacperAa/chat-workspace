import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';
import { RegisterFormGroup } from './models/register-form-group.model';
import { FormPartComponent } from './ui/molecules/form-field/form-part.component';
import { FormPartProperties } from './ui/molecules/form-field/models/form-part-properties.model';

const MATERIAL_IMPORTS = [MatButton, MatLabel, MatFormField, MatInput];

@Component({
  selector: 'kaa-register',
  standalone: true,
  imports: [MATERIAL_IMPORTS, AuthCoreComponent, ReactiveFormsModule, FormPartComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private _fb = inject(FormBuilder);

  public registerFormGroup: FormGroup<RegisterFormGroup> = this._fb.group({
    fullName: this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    }),
    contactInformation: this._fb.group({
      email: ['', [Validators.required]],
    }),
    passwords: this._fb.group({
      password: ['', [Validators.required]],
      repeatPassword: ['', Validators.required],
    }),
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
}