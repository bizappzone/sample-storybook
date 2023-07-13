import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ngShowcaseSrcAppFormsRoutes } from './lib.routes';
import { FormsPageComponent } from './forms-page/forms-page.component';
import { UiFormsModule } from '@baz/ui-forms-temp';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ngShowcaseSrcAppFormsRoutes),
    UiFormsModule,
  ],
  declarations: [FormsPageComponent],
  exports: [FormsPageComponent],
})
export class NgShowcaseSrcAppFormsModule {}
