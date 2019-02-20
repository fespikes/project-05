/**
 * 验证密码格式
 */
import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  FormControl,
  AbstractControl,
  Validator,
  NgModel,
} from '@angular/forms';
import { TranslateService } from '../../i18n';

@Directive({
  selector: '[wsPasswordPattern]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordPatternDirective,
      multi: true,
    },
  ],
})
export class PasswordPatternDirective implements Validator {

  constructor(
    private translate: TranslateService,
  ) { }

  validate(control: AbstractControl): {[validator: string]: string | boolean} {
    const value = control.value || '';

    // minimum/maximum length
    if (value.length < 8 || value.length > 20) {
      return { wsPasswordPattern: this.translate.translateKey('TUI.FORM.PASSWORD_INVALID_LENGTH') };
    }

    // valid symbols
    const regValid = new RegExp(/^[0-9A-Za-z\(\)`~!@#\$%\^&\*-_\+=\|/\\\{\}\[\]:;"'<>,\.\?]+$/);
    if (!regValid.test(value)) {
      return { wsPasswordPattern: this.translate.translateKey('TUI.FORM.PASSWORD_INVALID_SYMBOL') };
    }

    // valid pattern: at least one letter and one number
    const regPattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d).*$/);
    if (!regPattern.test(value)) {
      return { wsPasswordPattern: this.translate.translateKey('TUI.FORM.PASSWORD_INVALID_PATTERN') };
    }

    return null;
  }

}
