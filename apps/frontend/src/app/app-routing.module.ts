import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { SignInPageComponent } from './pages/sign-in/sign-in.component';
import { SignUpPageComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
