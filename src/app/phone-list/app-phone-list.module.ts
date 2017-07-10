import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import {
  AppPhoneListComponent,
  FilterByNamePipe,
  OrderByPipe
} from './app-phone-list.component';

@NgModule({
  declarations: [
    AppPhoneListComponent,
    FilterByNamePipe,
    OrderByPipe
  ],
  exports: [
    AppPhoneListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: []
})
export class AppPhoneListModule { }
