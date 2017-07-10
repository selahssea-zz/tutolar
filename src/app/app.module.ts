import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppPhoneListModule } from './phone-list/app-phone-list.module';
import { AppPhoneListComponent } from './phone-list/app-phone-list.component';
import { AppPhoneDetailModule } from './phone-detail/app-phone-detail.module';
import {
  AppPhoneDetailComponent
} from './phone-detail/app-phone-detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppPhoneListModule,
    AppPhoneDetailModule,
    RouterModule.forRoot([
      {
        path: 'phones',
        component: AppPhoneListComponent
      },
      {
        path: 'phones/:id',
        component: AppPhoneDetailComponent
      },
      {
        path: '',
        redirectTo: '/phones',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
