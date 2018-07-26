import { Component, Input } from '@angular/core';
import { Padding } from '../../models/Padding';

@Component({
  selector: '[value-axis]',
  templateUrl: './value-axis.component.html',
  styleUrls: ['./value-axis.component.css']
})
export class ValueAxisComponent {
  @Input() svgHeight: number;
  @Input() padding: Padding;
  path: string;
  ticks: number[];

  constructor() { 
    this.ticks = [];

    for (var i = 0; i <= 10; i++) {
      this.ticks.push(i/10);
    }
  }

  ngOnInit() {
    this.path = `M${this.padding.left},${this.svgHeight - this.padding.bottom}H${this.padding.left}V${this.padding.top}`;
  }
}
