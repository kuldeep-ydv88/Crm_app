import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(passwordField: string = 'password', confirmPasswordField: string = 'confirmPassword'): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get(passwordField);
    const confirmPassword = control.get(confirmPasswordField);
    
    if (!password || !confirmPassword) {
      return null;
    }
    
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    
    // Clear mismatch error if passwords match
    if (confirmPassword.hasError('mismatch')) {
      delete confirmPassword.errors?.['mismatch'];
      confirmPassword.updateValueAndValidity({ emitEvent: false });
    }
    
    return null;
  };
}
