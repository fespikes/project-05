import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TuiModule, TuiMessageService } from 'tdc-ui';
import { SharedModule } from './shared';
import { IconModule } from '../assets/icons/icon.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    IconModule,
    TuiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
