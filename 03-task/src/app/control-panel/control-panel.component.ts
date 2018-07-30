import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { PathData } from '../models/PathData';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {

  @Input() data:  PathData[];
  @Output()
  colorChangeEvent: EventEmitter<{color: string, index: number}> = new EventEmitter<{color: string, index: number}>();
  @Output()
  visibilityToggleEvent: EventEmitter<{isVisible: boolean, index: number}> = new EventEmitter<{isVisible: boolean, index: number}>();

  constructor() { }

  changeColor(config: {color: string, index: number}) {
    this.colorChangeEvent.emit(config);
  }

  toggleVisibility(config: {isVisible: boolean, index: number}) {
    this.visibilityToggleEvent.emit(config);
  }
}
