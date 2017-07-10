import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppPhoneDetailComponent } from './app-phone-detail.component';
import { CheckmarkPipe } from './checkmark.pipe';

@NgModule({
  declarations: [
    AppPhoneDetailComponent,
    CheckmarkPipe
  ],
  exports: [
    AppPhoneDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppPhoneDetailModule { }
