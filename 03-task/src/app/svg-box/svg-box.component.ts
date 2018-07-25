import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
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

  @Input() data:  PathData[];

  padding = {left: 50, top: 50, right: 50, bottom: 50};
  // data:  PathData[];
  timeAxis: ScaleTime<number, number>;
  valueAxis: ScaleLinear<number, number>;
  leftTimeBound: Date;
  nativeElement;
  svgWidth: number = 1000;
  svgHeight: number = 500;
  
  @ViewChild("container", {read: ElementRef}) container: ElementRef;

  constructor(private dataService: DataService,element: ElementRef) {
     
    this.nativeElement = element.nativeElement;    
    
  }

  ngOnInit() {
    this.getData();
    this.onResize();  
  }  

  ngAfterViewInit() {
    this.onResize();
  }

  getData(): void {
    this.dataService.updateData().subscribe(
      () => {
        this.updateTime();
      }, 
      () => console.log("Error")
    );
  }

  updateTime() {
    let time = new Date();    
    this.timeAxis.domain([this.leftTimeBound?this.leftTimeBound:this.leftTimeBound = new Date(), time]); 
  }

  onResize() {
    this.svgWidth = this.nativeElement.firstChild.clientWidth;
    this.timeAxis = scaleTime().range([0, this.svgWidth - this.padding.right - this.padding.left ]);

    this.svgHeight = this.nativeElement.firstChild.clientHeight;
    this.valueAxis = scaleLinear().domain([0, 1]).range([this.svgHeight - this.padding.bottom, this.padding.top]);  
  }
}
