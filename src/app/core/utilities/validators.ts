import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {

  static mailFormat(control: FormControl): IValidationResult {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]{2,64}@[(\w+\-+)|(\w+)]{1,63}\.[\w]{2,6}(\.[\w]{2,6})*$/i;

    return (control.value !== undefined && control.value !== null && control.value !== '' &&
    (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value)))
    ? {'incorrectMailFormat': true} : null;
  }

  static passwordFormat(control: FormControl): IValidationResult {
    const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W]{8,}$/;
    if (!PASSWORD_REGEXP.test(control.value)) {
      return {'notPasswordFormat': true };
    }
    return null;
  }

}

interface IValidationResult {
  [errorKey: string]: boolean;
}
