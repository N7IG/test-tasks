import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { PathData } from './models/PathData';
// import { Point } from './models/Point';

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
          this.data = values.map(() => new PathData());
        }
        this.data.forEach((pathdata: PathData, index: number) => pathdata.addPoint(values[index]));
        this.data = [...this.data];
      }, 
      () => console.log("Error")
    );
  }

  ngOnDestroy() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }
}