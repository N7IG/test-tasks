import { Component, Input } from '@angular/core';

@Component({
  selector: '[value-axis]',
  templateUrl: './value-axis.component.html',
  styleUrls: ['./value-axis.component.css']
})
export class ValueAxisComponent {
  @Input() svgHeight: number;

  stroke: string;
  strokeWidth: number;
  path: string;
  paddingBottom: number = 50;
  paddingTop: number = 50;
  ticks: number[];

  constructor() { 
    this.stroke = "#b52e31";
    this.strokeWidth = 10;
    this.ticks = [];

    for (var i = 0; i <= 10; i++) {
      this.ticks.push(i/10);
    }
    
  }

  ngOnInit() {
    this.path = `M50,${this.svgHeight - this.paddingBottom}H50V${this.paddingTop}H50`;
  }

  ngAfterViewInit() {
    this.path = `M50,${this.svgHeight - this.paddingBottom}H50V${this.paddingTop}H50`;
  }
}
