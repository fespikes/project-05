import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiModule, FormModule } from 'tdc-ui';
import { I18nModule } from '../i18n';

import {
} from './components';

import {
  DefaultPipe
} from './pipes';

import {
  AccuracyDirective,
  MaxLengthDirective,
  PatternDirective,
  PasswordPatternDirective,
} from './validators';

import { BackComponent } from './components/back/back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiModule,
    I18nModule,
    FormModule
  ],
  declarations: [
    BackComponent,
    DefaultPipe,

    AccuracyDirective,
    MaxLengthDirective,
    PatternDirective,
    PasswordPatternDirective
  ],
  exports: [
  ],
  providers: [
  ],
})
export class SharedModule { }
