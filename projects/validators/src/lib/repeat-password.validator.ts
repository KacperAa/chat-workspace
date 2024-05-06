import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(controlName: string, matchControlName: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const controlValue = group.get(controlName)!.value;
    const matchControlValue = group.get(matchControlName)!.value;

    if (controlValue !== matchControlValue) {
      group.get(controlName)?.setErrors({ notSame: true });
      group.get(matchControlName)?.setErrors({ notSame: true });
    }

    return null;
  };
}
