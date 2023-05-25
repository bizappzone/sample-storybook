import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ngShowcaseSrcAppFormsRoutes } from './lib.routes';
import { FormsPageComponent } from './forms-page/forms-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ngShowcaseSrcAppFormsRoutes),
    RouterModule.forChild(ngShowcaseSrcAppFormsRoutes),
  ],
  declarations: [FormsPageComponent],
  exports: [FormsPageComponent],
})
export class NgShowcaseSrcAppFormsModule {}
