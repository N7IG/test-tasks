import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgBoxModule } from './svg-box/svg-box.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SvgBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
