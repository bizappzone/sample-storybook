import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [CommonModule, RoutingModule],

  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class ShowcaseSrcAppHomePageModule {}
