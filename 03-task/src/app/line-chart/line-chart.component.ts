import { Component, OnInit, ElementRef, ViewChild, Input, OnChanges, SimpleChange, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { scaleTime, ScaleTime, scaleLinear, ScaleLinear } from "d3-scale";
import { PathData } from '../models/PathData';
import { Padding } from '../models/Padding';

@Component({
	selector: 'line-chart',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent implements OnInit, OnChanges {

  	@Input() data: PathData[];

	padding: Padding = {left: 50, top: 50, right: 20, bottom: 50};
	timeAxis: ScaleTime<number, number>;
	valueAxis: ScaleLinear<number, number>;
	leftTimeBound: Date;
	nativeElement: HTMLElement;
	svgWidth: number ;
	svgHeight: number ;
	
	@ViewChild("container", {read: ElementRef}) container: ElementRef;

  	constructor(element: ElementRef) {
		this.nativeElement = element.nativeElement;    
  	}

  	ngOnInit() {
		this.onResize();
  	}
  
  	ngOnChanges(ch: SimpleChanges) {
		if(ch.data) {
			// this.onResize();
			this.svgWidth = (<HTMLElement>this.nativeElement.firstChild).clientWidth;
			this.timeAxis = scaleTime().range([0, this.svgWidth - this.padding.right - this.padding.left ]);
			this.updateTime(); 
		}
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