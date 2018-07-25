import { Component, OnInit, Input } from '@angular/core';
import { line } from 'd3-shape';
import { PathData } from '../../models/PathData';
import { ScaleTime, ScaleLinear } from 'd3-scale';
import { Point } from '../../models/Point';

@Component({
  selector: '[app-path]',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  @Input() timeAxis: ScaleTime<number, number>;
  @Input() valueAxis: ScaleLinear<number, number>;
  @Input() data:  PathData;

  strokeWidth: number = 2;

  constructor() { }

  ngOnInit() {
    
  }

  // HOW
  // TO
  // FIX ????????????
  lineFunction(points: Point[]) {
    let pathString = line()
    .x((point) => { 
      return 50 + this.timeAxis(point.time); 
    })
    .y((point) => { 
      return this.valueAxis(point.value); 
    })(points);

    return pathString;
  }
  

} 
