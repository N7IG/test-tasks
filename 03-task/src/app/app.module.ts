import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LineChartModule } from './line-chart/line-chart.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { PathControlComponent } from './control-panel/path-control/path-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    PathControlComponent
  ],
  imports: [
    BrowserModule,
    LineChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
