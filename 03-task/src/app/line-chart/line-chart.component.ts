import { Component, OnInit, ElementRef, ViewChild, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { scaleTime, ScaleTime, scaleLinear, ScaleLinear } from "d3-scale";
import { PathData } from '../models/PathData';
import { Padding } from '../models/Padding';
import { Config } from '../models/Config';
import { Store } from '@ngrx/store';
import { AppState } from '../models/State';

@Component({
	selector: 'line-chart',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent implements OnInit, OnChanges {

	@Input() allData: PathData[];
	@Input() allConfig: Config[];

	padding: Padding = {left: 50, top: 50, right: 20, bottom: 50};
	timeAxis: ScaleTime<number, number>;
	valueAxis: ScaleLinear<number, number>;
	leftTimeBound: Date;
	nativeElement: HTMLElement;
	svgWidth: number;
	svgHeight: number;	
	
	@ViewChild("container", {read: ElementRef}) container: ElementRef;

  	constructor(element: ElementRef, private store: Store<AppState>) {
		this.nativeElement = element.nativeElement;
  	}

  	ngOnInit() {
		this.onResize();
  	}
  
  	ngOnChanges(ch: SimpleChanges) {
		if(ch) {
			this.svgWidth = (<HTMLElement>this.nativeElement.firstChild).clientWidth;
			this.timeAxis = scaleTime().range([0, this.svgWidth - this.padding.right - this.padding.left ]);
			this.updateTime(); 
		}
  	}

  	updateTime() {
		const time = new Date();  
		const left = this.allData[0][0].time;
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