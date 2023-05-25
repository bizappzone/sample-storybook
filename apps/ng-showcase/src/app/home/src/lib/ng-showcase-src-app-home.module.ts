import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ngShowcaseSrcAppHomeRoutes } from './lib.routes';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ngShowcaseSrcAppHomeRoutes),
    RouterModule.forChild(ngShowcaseSrcAppHomeRoutes),
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class NgShowcaseSrcAppHomeModule {}
