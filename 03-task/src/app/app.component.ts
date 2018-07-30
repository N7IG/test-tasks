import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { PathData } from './models/PathData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app';
  data:  PathData[];
  subscribtion: any;

  constructor(private dataService: DataService) {  }

  ngOnInit() {
    this.getData();
  }  

  getData(): void {
    this.dataService.updateData().subscribe(
      (values: {value: number, time: Date}[]) => {

        if (!this.data) {
          this.data = values.map(() => <PathData>{data: [], color: this.randomColor(), isVisible: true });
        }
        this.data.forEach((pathdata: PathData, index: number) => pathdata.data.push((values[index])));
        this.data = [...this.data];
      }, 
      () => console.log("Error")
    );
  }

  randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 

  changeColor(config: {color: string, index: number}) {
    this.data[config.index].color = config.color;
  }

  toggleVisibility(config: {isVisible: boolean, index: number}) {
    this.data[config.index].isVisible = config.isVisible;
  }

  ngOnDestroy() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }
}