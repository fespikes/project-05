import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { TranslateService } from '../../i18n';

@Directive({
  selector: '[wsMaxLength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxLengthDirective,
      multi: true,
    },
  ],
})
export class MaxLengthDirective implements Validator {
  @Input() wsMaxLength: number;

  constructor(
    private translate: TranslateService,
  ) { }

  validate(control: AbstractControl): {[validator: string]: string | boolean} {
    if (!this.wsMaxLength || !control.value) {
      return;
    }

    const pattern = new RegExp(`^$|^.{0,${this.wsMaxLength}}$`);
    if (pattern.test(control.value)) {
      return null;
    }
    return { wsMaxLength: `${this.translate.translateKey('TUI.FORM.MAXLENGTH_ERROR')}: ${this.wsMaxLength}` };
  }

}
