import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart.component';
import { ValueAxisComponent } from './value-axis/value-axis.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';
import { PathComponent } from './path/path.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LineChartComponent, ValueAxisComponent, TimeAxisComponent, PathComponent],
  exports: [LineChartComponent]
})
export class LineChartModule { }
