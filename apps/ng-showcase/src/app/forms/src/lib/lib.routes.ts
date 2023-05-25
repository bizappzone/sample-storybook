import { Route } from '@angular/router';
import { FormsPageComponent } from './forms-page/forms-page.component';

export const ngShowcaseSrcAppFormsRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: FormsPageComponent },
];
