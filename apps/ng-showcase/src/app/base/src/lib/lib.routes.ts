import { Route } from '@angular/router';
import { BasePageComponent } from './base-page/base-page.component';

export const ngShowcaseSrcAppBaseRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: BasePageComponent },
];
