import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PathData } from '../models/PathData';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {

  @Input() data:  PathData[];

  constructor() { }
}
