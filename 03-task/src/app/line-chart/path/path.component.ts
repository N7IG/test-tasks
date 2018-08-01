import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { line } from 'd3-shape';
import { PathData } from '../../models/PathData';
import { ScaleTime, ScaleLinear } from 'd3-scale';
import { Padding } from '../../models/Padding';
import { Config } from '../../models/Config';

@Component({
  selector: '[app-path]',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PathComponent {

  @Input() timeAxis: ScaleTime<number, number>;
  @Input() valueAxis: ScaleLinear<number, number>;
  @Input() data: PathData;
  @Input() config: Config;
  @Input() padding: Padding;

  strokeWidth: number = 2;

  constructor() {}

  lineFunction(points: {value: number, time: Date}[]) {
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
