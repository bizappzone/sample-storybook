import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'forms',
    loadChildren: () =>
      import('ng-showcase/src/app/forms').then(
        (m) => m.NgShowcaseSrcAppFormsModule
      ),
  },
  {
    path: 'base',
    loadChildren: () =>
      import('ng-showcase/src/app/base').then(
        (m) => m.NgShowcaseSrcAppBaseModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('ng-showcase/src/app/home').then(
        (m) => m.NgShowcaseSrcAppHomeModule
      ),
  },
];
