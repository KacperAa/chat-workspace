import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(controlName: string, matchControlName: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const control = group.get(controlName)!.value;
    const matchControl = group.get(matchControlName)!.value;

    return control === matchControl ? null : { notSame: true };
  };
}
