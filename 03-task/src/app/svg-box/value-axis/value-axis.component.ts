import { Component, Input } from '@angular/core';

@Component({
  selector: '[value-axis]',
  templateUrl: './value-axis.component.html',
  styleUrls: ['./value-axis.component.css']
})
export class ValueAxisComponent {
  stroke: string;
  strokeWidth: number;
  height: number;
  path: string;
  paddingBottom: number = 50;
  paddingTop: number = 50;
  ticks: number[];

  constructor() { 
    this.stroke = "#b52e31";
    this.strokeWidth = 10;
    this.height = 800;
    this.path = `M50,${this.height - this.paddingBottom}H50V${this.paddingTop}H50`;
    this.ticks = [];

    for (var i = 0; i <= 10; i++) {
      this.ticks.push(i/10);
    }
  }
}
