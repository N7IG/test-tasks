import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { scaleTime, ScaleTime, scaleLinear, ScaleLinear } from "d3-scale";
import { DataService } from '../data.service';
import { PathData } from '../models/PathData';
import { Point } from '../models/Point';

@Component({
  selector: 'svg-box',
  templateUrl: './svg-box.component.html',
  styleUrls: ['./svg-box.component.css']
})
export class SvgBoxComponent implements OnInit {

  padding = {left: 50, top: 50, right: 50, bottom: 50};
  data:  PathData[];
  timeAxis: ScaleTime<number, number>;
  valueAxis: ScaleLinear<number, number>;
  leftTimeBound: Date;
  nativeElement;
  svgWidth: number = 1000;
  
  @ViewChild("container", {read: ElementRef}) container: ElementRef;

  constructor(private dataService: DataService, element: ElementRef) {

    this.nativeElement = element.nativeElement;
    console.log(this.svgWidth);
    
    // this.timeAxis = scaleTime().domain([this.leftTimeBound, rightTimeBound]).range([0, 950]); 
    this.timeAxis = scaleTime().range([0, this.svgWidth ])
    this.valueAxis = scaleLinear().domain([0, 1]).range([750, 50]);     
    
  }

  ngOnInit() {
    this.getData();
    this.onResize();
  }  

  getData(): void {
    this.dataService.updateData().subscribe(
      (values: Point[]) => {

        this.updateTime();

        if (!this.data) {
          this.data = values.map((value: Point) => new PathData()); //somehow add values to pathdatas 
        }
        this.data.forEach((pathdata: PathData, index: number) => pathdata.addPoint(values[index]));

        // console.log(this.data);
      }, 
      () => console.log("Error")
    );
  }

  updateTime() {
    let time = new Date();
    // console.log('time : ' + time);
    
    this.timeAxis.domain([this.leftTimeBound?this.leftTimeBound:this.leftTimeBound = new Date(), time]); 
  }

  onResize() {
    this.svgWidth = this.nativeElement.firstChild.clientWidth;
    this.timeAxis = scaleTime().range([0, this.svgWidth - this.padding.right - this.padding.left ]);
    
  }

}
