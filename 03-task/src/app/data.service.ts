import { Injectable } from '@angular/core';
import { Observable, interval, Observer} from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PathData } from './models/PathData';
import { Point } from './models/Point';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: PathData[];
  pathNumber: number = 5;

  constructor() { }

  updateData(): Observable<Point[]> {
    return interval(500).pipe(startWith(this.getNewPoints()),map(() => this.getNewPoints()));
  }

  getNewPoints(): Point[] {  
    let currentTime = new Date();
    let result: Point[] = [];

    for(let i = 0; i < this.pathNumber; i++) {
      result.push(new Point(this.getRandomValue(i + 1), currentTime))
    }
    
    return result;
  }

  getRandomValue(pathIndex: number): number {
    let randomValue = Math.abs(Math.random() / pathIndex);
    
    return randomValue;
  }
}
