import { Component, ElementRef, Input} from '@angular/core';
import { Padding } from '../../models/Padding';

@Component({
  selector: '[time-axis]',
  templateUrl: './time-axis.component.html',
  styleUrls: ['./time-axis.component.css']
})
export class TimeAxisComponent {

  @Input() svgWidth: number;
  @Input() svgHeight: number;
  @Input() padding: Padding;

  stroke: string;
  strokeWidth: number;
  path: string;
  ticks: number[];

  constructor(element: ElementRef) { 
    this.stroke = "#b52e31"
    this.strokeWidth = 4;
    this.ticks = [];

    for (var i = 0; i <= 10; i++) {
      this.ticks.push(i/10);
    }
  }

  ngOnInit() {
    this.path =`M50,${this.svgHeight - this.padding.bottom}V${this.svgHeight - this.padding.bottom}H`;
  }
}
