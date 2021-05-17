/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleButtonComponent } from '@front-end/components';
import { HomePage, SignInPage, SignUpPage } from '@front-end/pages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractSignInUpComponent } from './components/abstract-sign-in-up/abstract-sign-in-up.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ButtonComponent } from './components/button/button.component';
import { NgIfRouteDirective } from './directives/ng-if-route.directive';
import { DashboardPage } from './pages/dashboard/dashboard.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SignInPage,
    SignUpPage,
    NgIfRouteDirective,
    GoogleButtonComponent,
    BackButtonComponent,
    AbstractSignInUpComponent,
    ButtonComponent,
    DashboardPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
