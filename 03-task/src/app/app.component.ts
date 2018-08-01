import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { PathData } from './models/PathData';
import { Config } from './models/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app';
  allData:  PathData[];
  allConfig: Config[];
  subscribtion: any;

  constructor(private dataService: DataService) {  }

  ngOnInit() {
    this.getData();
  }  

  getData(): void {
    this.dataService.updateData().subscribe(
      (values: {value: number, time: Date}[]) => {
        if (!this.allData) {
          this.allData = values.map(() => []);
          this.allConfig = values.map(() => { 
            return { color: this.randomColor(), isVisible: true } 
          });
        }
        this.allData.forEach((pathdata: PathData, index: number) => pathdata.push(values[index]));
        this.allData = [...this.allData];
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
    this.allConfig[config.index].color = config.color;
    this.allConfig = [...this.allConfig];
  }

  toggleVisibility(config: {isVisible: boolean, index: number}) {
    this.allConfig[config.index].isVisible = config.isVisible;
    this.allConfig = [...this.allConfig];
  }

  ngOnDestroy() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }
}