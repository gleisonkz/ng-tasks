/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CollectionDetailsPage,
  CollectionsPage,
  HomePage,
  SignInPage,
  SignUpPage,
} from '@front-end/pages';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'sign-in', component: SignInPage },
  { path: 'sign-up', component: SignUpPage },
  {
    path: 'collections',
    component: CollectionsPage,
  },
  { path: 'collections/details/:id', component: CollectionDetailsPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
