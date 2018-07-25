import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgBoxModule } from './svg-box/svg-box.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    SvgBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
