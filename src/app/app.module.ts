import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppPhoneListModule } from './phone-list/app-phone-list.module';
import { AppPhoneDetailModule } from './phone-detail/app-phone-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppPhoneListModule,
    AppPhoneDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
