import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { line, Line } from "d3-shape";
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

  // lineF: Line<[number, number]>;
  // lineFunction: any; //get rid of any
  data:  PathData[];
  timeAxis: ScaleTime<number, number>;
  valueAxis: ScaleLinear<number, number>;
  leftTimeBound: Date;
  
  @ViewChild("container", {read: ElementRef}) container: ElementRef;

  constructor(private dataService: DataService) {

    // this.leftTimeBound = new Date();
    // this.leftTimeBound.setSeconds(new Date().getSeconds());
    // console.log("leftTimeBound");
    // console.log(this.leftTimeBound);
    // let rightTimeBound = new Date();
    // rightTimeBound.setSeconds(new Date().getSeconds() + 4);
    // console.log("rightTimeBound");
    // console.log(rightTimeBound);
    
    // this.timeAxis = scaleTime().domain([this.leftTimeBound, rightTimeBound]).range([0, 950]); 
    this.timeAxis = scaleTime().range([0, 950])
    this.valueAxis = scaleLinear().domain([0, 1]).range([750, 50]);     
    
  }

  ngOnInit() {
    this.getData();
    // console.log(this.lineF([[new Date(), 3], [new Date(), 2]]));
    // console.log('axis - ' + this.timeAxis);
  }

  // lineFunction(points: Point[]) {
  //   // let time = point.time;
  //   // let value = point.value;
  //   let arrayPoints = points.map(point => [point.time, point.value]);
  //   return line()
  //   .x((d) => { return 50 + this.timeAxis(d[0]); })
  //   .y((d) => { return d[1]*100; })(arrayPoints);
  // }

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

  updateTime() {
    let time = new Date();
    // console.log('time : ' + time);
    
    this.timeAxis.domain([this.leftTimeBound?this.leftTimeBound:this.leftTimeBound = new Date(), time]); 
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

}
