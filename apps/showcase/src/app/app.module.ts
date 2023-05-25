import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UiBaseModule } from '@baz/ui-base-temp';
import { UiFormsModule } from '@baz/ui-forms-temp';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiBaseModule, UiFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
