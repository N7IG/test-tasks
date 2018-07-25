import { Component } from '@angular/core';
import { DataService } from './data.service';
import { PathData } from './models/PathData';
import { Point } from './models/Point';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:  PathData[];

  constructor(private dataService: DataService) {  }

  ngOnInit() {
    this.getData();
  }  

  getData(): void {
    this.dataService.updateData().subscribe(
      (values: Point[]) => {


        if (!this.data) {
          this.data = values.map((value: Point) => new PathData());
        }
        this.data.forEach((pathdata: PathData, index: number) => pathdata.addPoint(values[index]));
      }, 
      () => console.log("Error")
    );
  }
}