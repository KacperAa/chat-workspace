import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthCoreComponent } from '../ui/templates/auth-core/auth-core.component';
import { RegisterFacade } from './register.facade';
import { FormPartComponent } from './ui/molecules/form-field/form-part.component';
import { FormPartProperties } from './ui/molecules/form-field/models/form-part-properties.model';

const MATERIAL_IMPORTS = [MatButton, MatLabel, MatFormField, MatInput, MatSnackBarModule];

@Component({
  selector: 'kaa-register',
  standalone: true,
  imports: [MATERIAL_IMPORTS, AuthCoreComponent, ReactiveFormsModule, FormPartComponent],
  providers: [RegisterFacade],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  protected registerFacade = inject(RegisterFacade);

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
