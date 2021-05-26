/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AbstractSignInUpComponent,
  BackButtonComponent,
  ButtonComponent,
  CollectionComponent,
  GoogleButtonComponent,
} from '@front-end/components';
import {
  CollectionDetailsPage,
  CollectionsPage,
  HomePage,
  SignInPage,
  SignUpPage,
} from '@front-end/pages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NgIfRouteDirective } from './directives/ng-if-route.directive';

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
    CollectionsPage,
    CollectionComponent,
    CollectionDetailsPage,
    TaskItemComponent,
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
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
