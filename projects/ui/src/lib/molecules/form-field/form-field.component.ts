import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {}
