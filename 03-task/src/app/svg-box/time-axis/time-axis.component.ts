import { Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: '[time-axis]',
  templateUrl: './time-axis.component.html',
  styleUrls: ['./time-axis.component.css']
})
export class TimeAxisComponent {

  @Input() svgWidth: number;

  stroke: string;
  strokeWidth: number;
  height: number;
  path: string;
  paddingBottom: number = 50;
  paddingTop: number = 50;
  ticks: number[];

  constructor(element: ElementRef) { 
    this.stroke = "#b52e31"
    this.strokeWidth = 4;
    this.height = 800;
    this.path =`M50,${this.height - this.paddingBottom}V${this.height - this.paddingBottom}H${this.svgWidth || 1000}`;
    this.ticks = [];

    console.log(element.nativeElement);

    for (var i = 0; i <= 10; i++) {
      this.ticks.push(i/10);
    }
  }

  ngAfterViewInit() {
    this.path =`M50,${this.height - this.paddingBottom}V${this.height - this.paddingBottom}H${this.svgWidth}`;
    // child is set
  }

}
