import { Component, OnInit, Input } from '@angular/core';
import { Line, line } from 'd3-shape';
import { DataService } from '../../data.service';
import { PathData } from '../../models/PathData';
import { ScaleTime, ScaleLinear } from 'd3-scale';
import { Point } from '../../models/Point';

@Component({
  selector: '[app-path]',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  // @Input() lineF:  Line<[number, number]>;
  @Input() timeAxis: ScaleTime<number, number>;
  @Input() valueAxis: ScaleLinear<number, number>;
  @Input() data:  PathData[];

  stroke: string = '#fff';
  strokeWidth: number = 2;
  // data: [ Date, number][];
  // data: [ Date, number][] = [[new Date('1995-12-17T03:24:00'), 1], [new Date('1995-12-17T03:25:00'), 5], [new Date('1995-12-17T03:26:00'), 2], [new Date('1995-12-17T03:27:00'), 4]];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }

  // HOW
  // TO
  // FIX ????????????
  lineFunction(points: Point[]) {
    // console.log(points);
    let pathString = line()
    .x((point) => { 
      return 50 + this.timeAxis(point.time); 
    })
    .y((point) => { 
      return this.valueAxis(point.value); 
    })(points);
    // console.log(pathString);

    return pathString;
  }

  // lineFunction(points: Point[]) {
  //   // let time = point.time;
  //   // let value = point.value;
  //   console.log('axisLF - '+ this.timeAxis);
  //   console.log(points[0].value);
  //   // console.log(this);

  //   let arrayPoints = points.map(point => [point.time, point.value]);
  //   console.log(arrayPoints);
  //   // console.log(this.lineF(arrayPoints));
  //   // console.log(arrayPoints);
    
  //   return 1;
  // }

      // line().x((d: number[]) => { return 50 + this.timeAxis(d[0]); }).y((d: number[]) => { return d[1]*100; });


}
