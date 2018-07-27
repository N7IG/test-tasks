import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PathData } from '../../models/PathData';

@Component({
  selector: 'app-path-control',
  templateUrl: './path-control.component.html',
  styleUrls: ['./path-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PathControlComponent  {
  @Input() index:  number;
  @Input() pathdata:  PathData;

  constructor() { }
}
