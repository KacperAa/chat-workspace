import { Component, inject, input } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { FormPartProperties } from './models/form-part-properties.model';

@Component({
  selector: 'kaa-form-part',
  standalone: true,
  imports: [MatLabel, MatFormField, MatInput, ReactiveFormsModule],
  viewProviders: [{ provide: ControlContainer, useFactory: () => inject(ControlContainer, { skipSelf: true }) }],
  templateUrl: './form-part.component.html',
  styleUrl: './form-part.component.scss',
})
export class FormPartComponent {
  public parentContainer = inject(ControlContainer);

  public label = input.required<string>();
  public controlKey = input.required<string>();
  public formPartProperties = input.required<FormPartProperties[]>();

  private get _parentFormGroup(): FormGroup {
    return this.parentContainer.control as FormGroup;
  }

  public get formPartGroup(): FormGroup {
    return this._parentFormGroup.controls[this.controlKey()] as FormGroup;
  }

  public formPartControlKeys(): string[] {
    return Object.keys(this.formPartGroup.controls);
  }
}
