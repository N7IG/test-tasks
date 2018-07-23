import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgBoxComponent } from './svg-box.component';
import { ValueAxisComponent } from './value-axis/value-axis.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';
import { PathComponent } from './path/path.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SvgBoxComponent, ValueAxisComponent, TimeAxisComponent, PathComponent],
  exports: [SvgBoxComponent]
})
export class SvgBoxModule { }
