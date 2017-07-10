import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppPhoneDetailComponent } from './app-phone-detail.component';

@NgModule({
  declarations: [
    AppPhoneDetailComponent
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
