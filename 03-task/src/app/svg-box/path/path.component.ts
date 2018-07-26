import { Component, Input } from '@angular/core';
import { line } from 'd3-shape';
import { PathData } from '../../models/PathData';
import { ScaleTime, ScaleLinear } from 'd3-scale';
import { Point } from '../../models/Point';
import { Padding } from '../../models/Padding';

@Component({
  selector: '[app-path]',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent{

  @Input() timeAxis: ScaleTime<number, number>;
  @Input() valueAxis: ScaleLinear<number, number>;
  @Input() data: PathData;
  @Input() padding: Padding;

  strokeWidth: number = 2;

  constructor() { }

  //IS THAT OK??
  lineFunction(points: Point[]) {
    let pathString = line()
    .x((point) => { 
      return this.timeAxis(point["time" as any]) + this.padding.left; 
    })
    .y((point) => { 
      return this.valueAxis(point["value" as any]); 
    })(points as any);

    return pathString;
  }
} 
