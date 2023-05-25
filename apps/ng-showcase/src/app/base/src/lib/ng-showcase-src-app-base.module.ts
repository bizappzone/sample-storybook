import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ngShowcaseSrcAppBaseRoutes } from './lib.routes';
import { BasePageComponent } from './base-page/base-page.component';
import { UiBaseModule } from '@baz/ui-base-temp';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ngShowcaseSrcAppBaseRoutes),
    UiBaseModule,
  ],
  declarations: [BasePageComponent],
  exports: [BasePageComponent],
})
export class NgShowcaseSrcAppBaseModule {}
