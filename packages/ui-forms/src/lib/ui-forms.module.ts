import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent, RadioComponent, TextareaComponent],
  exports: [InputComponent, RadioComponent, TextareaComponent],
})
export class UiFormsModule {}
