import { Injectable } from '@angular/core';
import { Observable, of, interval} from 'rxjs';
import { map} from 'rxjs/operators';
import { PathData } from './models/PathData';
import { Point } from './models/Point';
import { path } from 'd3-path';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: PathData[];
  pathNumber: number = 3;

  constructor() { }

  updateData(): Observable<Point[]> {

    // PROBABLY SHOULD EMIT POINTS, WHICH WILL BE PUSHED TO PATHDATA IN SVG-BOX COMP-T

    // return of('hey', 'hey').pipe(map(() => this.getNewPoints()));
    return interval(1000).pipe(map(() => this.getNewPoints()));
  }

  getNewPoints(): Point[] {  

    let currentTime = new Date();
    let result: Point[] = [];

    // console.log('time: ' + currentTime)

    for(let i = 0; i < this.pathNumber; i++) {
      result.push(new Point(this.getRandomValue(i + 1), currentTime))
    }
    
    return result;
  }

  getRandomValue(pathIndex: number): number {
    // console.log(pathIndex);
    let randomValue = Math.abs(Math.random() / pathIndex);
    // console.log("randomV: " + randomValue);
    
    return randomValue;
  }
}
