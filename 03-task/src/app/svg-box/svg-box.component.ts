import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { scaleTime, ScaleTime, scaleLinear, ScaleLinear } from "d3-scale";
import { DataService } from '../data.service';
import { PathData } from '../models/PathData';
import { Padding } from '../models/Padding';

@Component({
  selector: 'svg-box',
  templateUrl: './svg-box.component.html',
  styleUrls: ['./svg-box.component.css']
})
export class SvgBoxComponent implements OnInit {

  @Input() data:  PathData[];

  padding: Padding = {left: 50, top: 50, right: 20, bottom: 50};
  timeAxis: ScaleTime<number, number>;
  valueAxis: ScaleLinear<number, number>;
  leftTimeBound: Date;
  nativeElement: HTMLElement;
  svgWidth: number ;
  svgHeight: number ;
  
  @ViewChild("container", {read: ElementRef}) container: ElementRef;

  constructor(private dataService: DataService, element: ElementRef) {
    this.nativeElement = element.nativeElement;    
  }

  ngOnInit() {
    this.onResize();  
    this.getData();
  }  
  
  getData(): void {
    this.dataService.updateData().subscribe(
      () => {
        // this.onResize();
        
        this.svgWidth = (<HTMLElement>this.nativeElement.firstChild).clientWidth;
        this.timeAxis = scaleTime().range([0, this.svgWidth - this.padding.right - this.padding.left ]);

        this.updateTime(); 
      }, 
      () => console.log("Error")
    );
  }

  updateTime() {
    const time = new Date();  
    const left = this.data[0].data[0].time;
    this.timeAxis.domain([left, time]); 
  }

  onResize() {
    this.svgWidth = (<HTMLElement>this.nativeElement.firstChild).clientWidth;
    this.timeAxis = scaleTime().range([0, this.svgWidth - this.padding.right - this.padding.left ]);

    this.svgHeight = (<HTMLElement>this.nativeElement.firstChild).clientHeight;
    this.valueAxis = scaleLinear().domain([0, 1]).range([this.svgHeight - this.padding.bottom, this.padding.top]);  

    this.updateTime();    
  }
}