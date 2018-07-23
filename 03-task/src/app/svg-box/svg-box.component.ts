import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { line, Line } from "d3-shape";
import { scaleTime, ScaleTime } from "d3-scale";
import { DataService } from '../data.service';

@Component({
  selector: 'svg-box',
  templateUrl: './svg-box.component.html',
  styleUrls: ['./svg-box.component.css']
})
export class SvgBoxComponent implements OnInit {

  padding = {left: 50, top: 50, right: 50, bottom: 50};

  lineF: Line<[number, number]>;
  data:  (number | Date )[][];
  timeAxis: ScaleTime<number, number>;
  
  @ViewChild("container", {read: ElementRef}) container: ElementRef;

  constructor(element: ElementRef, private dataService: DataService) {
    

    this.timeAxis = scaleTime().domain([new Date('1995-12-17T03:24:00'), new Date('1995-12-17T03:28:00')]).range([0, 950]); 
    
    
    this.lineF = line()
      .x((d:[number,number]) => { return 50 + this.timeAxis(d[0]); })
      .y((d:[number,number]) => { return d[1]*100; });

   }

  ngOnInit() {
    console.log(this.container.nativeElement);
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(
      d => {
        this.data = d;
        console.log(d);
      }, 
      () => console.log("Error"), 
      () => console.log("completed")
    );
  }

}
