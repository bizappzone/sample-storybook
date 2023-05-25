/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/src/lib/showcase-src-app-home-page.module').then(
        (m) => m.ShowcaseSrcAppHomePageModule
      ),
  },
  {
    path: 'base',
    loadChildren: () =>
      import('./base-page/src/lib/showcase-src-app-base-page.module').then(
        (m) => m.ShowcaseSrcAppBasePageModule
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./form-page/src/lib/showcase-src-app-form-page.module').then(
        (m) => m.ShowcaseSrcAppFormPageModule
      ),
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
