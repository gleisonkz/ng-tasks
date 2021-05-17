import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInPageComponent, SignUpPageComponent } from '@front-end/pages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfRouteDirective } from './directives/ng-if-route.directive';
import { HomePageComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    SignUpPageComponent,
    NgIfRouteDirective,
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
