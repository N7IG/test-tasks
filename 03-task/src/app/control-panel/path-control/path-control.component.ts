import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnInit } from '@angular/core';
import { Config } from '../../models/Config';

@Component({
  selector: 'app-path-control',
  templateUrl: './path-control.component.html',
  styleUrls: ['./path-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PathControlComponent {
  @Input() index:  number;
  @Input() config:  Config;
  @Output()
  colorChangeEvent: EventEmitter<{color: string, index: number}> = new EventEmitter<{color: string, index: number}>();
  @Output()
  visibilityToggleEvent: EventEmitter<{isVisible: boolean, index: number}> = new EventEmitter<{isVisible: boolean, index: number}>();

  constructor() { }

  changeColor(event: Event) {
    this.colorChangeEvent.emit({color: (<HTMLInputElement>event.target).value, index: this.index});
  }

  toggleVisibility(event: Event) {
    this.visibilityToggleEvent.emit({isVisible: (<HTMLInputElement>event.target).checked, index: this.index});
  }
}
