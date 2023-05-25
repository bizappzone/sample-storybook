import { Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const ngShowcaseSrcAppHomeRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
];
