import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, IconComponent, BadgeComponent],
  exports: [ButtonComponent, IconComponent, BadgeComponent],
})
export class UiBaseModule {}
