import { Component, Input, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import { Padding } from '../../models/Padding';
import { select, Selection } from "d3-selection"
import { ScaleTime } from 'd3-scale';
import { axisBottom } from "d3-axis"

@Component({
  selector: '[time-axis]',
  templateUrl: './time-axis.component.html',
  styleUrls: ['./time-axis.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeAxisComponent implements  OnChanges{

  @Input() svgWidth: number;
  @Input() svgHeight: number;
  @Input() padding: Padding;
  @Input() timeAxis: ScaleTime<number, number>;

  ticks: number[];
  axisSelection: Selection<any, HTMLElement, any, {}>;

  constructor() {}

  ngOnInit() {
    this.axisSelection = select("#time-axis");
  }

  ngOnChanges() {
    if(this.axisSelection){
      this.axisSelection.call(axisBottom(this.timeAxis));
    }
  }
}