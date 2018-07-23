import { Component, OnInit, Input } from '@angular/core';
import { Line } from 'd3-shape';
import { DataService } from '../../data.service';

@Component({
  selector: '[app-path]',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  @Input() lineF:  Line<[number, number]>;
  @Input() data:  (number | Date )[][];

  stroke: string = '#fff';
  strokeWidth: number = 2;
  // data: [ Date, number][] = [[new Date('1995-12-17T03:24:00'), 1], [new Date('1995-12-17T03:25:00'), 5], [new Date('1995-12-17T03:26:00'), 2], [new Date('1995-12-17T03:27:00'), 4]];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }

}
