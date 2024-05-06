import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function repeatPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control);
    return null;
  };
}
