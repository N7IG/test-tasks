import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { configReducer } from './reducers/config';

import { AppComponent } from './app.component';
import { LineChartModule } from './line-chart/line-chart.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { PathControlComponent } from './control-panel/path-control/path-control.component';
import { ConfigEffects } from './effects/configEffects';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    PathControlComponent
  ],
  imports: [
    BrowserModule,
    LineChartModule,
    FormsModule,
    StoreModule.forRoot({ config: configReducer }),
    EffectsModule.forRoot([ConfigEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }