/**
 * 替代原生的pattern validator. 便于管理和显示错误信息
 */
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { TranslateService } from '../../i18n';

// tslint:disable-next-line
const emailPattern = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
const phoneNumberPattern = /[1-9][0-9]*/;
const space = /\s/;

const errorMsgs = {
  commonName: 'TUI.FORM.PATTERN.COMMON_NAME_ERROR',
  enName: 'TUI.FORM.PATTERN.EN_NAME_ERROR',
  email: 'TUI.FORM.PATTERN.EMAIL_ERROR',
  emails: 'TUI.FORM.PATTERN.EMAIL_ERROR',
  phoneNumber: 'TUI.FORM.PATTERN.PHONE_NUMBER_ERROR',
  phoneNumbers: 'TUI.FORM.PATTERN.PHONE_NUMBER_ERROR',
  version: 'TUI.FORM.PATTERN.VERSION_ERROR',
  integer: 'TUI.FORM.PATTERN.INTEGER_ERROR',
};

const patterns = {
  commonName: /^[\w\p{\u4e00-\u9FBB}-]{0,100}$/,
  enName: /^[a-zA-Z]\w{0,100}$/,
  email: new RegExp(`^${emailPattern.source}$`),
  // tslint:disable-next-line
  emails: new RegExp(`^${emailPattern.source}(;${space.source}*${emailPattern.source})*${space.source}*$`),
  phoneNumber: new RegExp(`^${phoneNumberPattern.source}$`),
  phoneNumbers: new RegExp(`^${phoneNumberPattern.source}(;${space.source}*${phoneNumberPattern.source})*${space.source}*$`),
  version: /^[0-9.]+$/,
  integer: /^\d+$/,
};

@Directive({
  selector: '[wsPattern]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PatternDirective,
      multi: true,
    },
  ],
})
export class PatternDirective implements Validator {
  @Input() wsPattern;

  constructor(
    private translate: TranslateService,
  ) { }

  getPatternReg(pattern) {
    if (!pattern) {
      return;
    }

    if (patterns[pattern]) {
      return patterns[pattern];
    } else {
      return RegExp(`^${pattern}$`);
    }
  }

  validate(control: AbstractControl): {[validator: string]: string | boolean} {
    const pattern = this.getPatternReg(this.wsPattern);
    if (!pattern) {
      return;
    }

    const value = control.value || '';
    if (pattern.test(value)) {
      return null;
    }
    return { wsPattern: this.translate.translateKey(errorMsgs[this.wsPattern]) };
  }

}
