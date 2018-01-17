import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';

import { AuthService } from './auth';

// @module: auth
import {
	LoginComp
} from './login/index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // @module: auth
    LoginComp,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
