/**
 * 替代原生的pattern validator. 便于管理和显示错误信息
 */
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { TranslateService } from '../../i18n';

@Directive({
  selector: '[wsAccuracy]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AccuracyDirective,
      multi: true,
    },
  ],
})
export class AccuracyDirective implements Validator {
  @Input() wsAccuracy;

  constructor(
    private translate: TranslateService,
  ) { }

  validate(control: AbstractControl): {[validator: string]: string | boolean} {
    if (!this.wsAccuracy || !control.value) {
      return;
    }

    const pattern = new RegExp(`^[0-9]+(\.[0-9]{0,${this.wsAccuracy}})?$`);
    if (pattern.test(control.value)) {
      return null;
    }
    return { wsPattern: +this.wsAccuracy === 0 ? this.translate.translateKey('TUI.FORM.PATTERN.INTEGER_ERROR') :
      `${this.translate.translateKey('TUI.FORM.PATTERN.ACCURACY_ERROR')} ${this.wsAccuracy}`};
  }

}
