import { Injectable } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { map, startWith, publishReplay, refCount } from 'rxjs/operators';
// import { Point } from './models/Point';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataStream: Observable<{value: number, time: Date}[]>;
  pathNumber: number = 5;

  constructor() { }

  updateData(): Observable<{value: number, time: Date}[]> {
    if (!this.dataStream) {
      this.dataStream = interval(500).pipe(
        // tap(val => console.log('FROM SERVICE: ', val)),
        map(() => this.getNewPoints()),
        startWith(this.getNewPoints()),
        publishReplay(1),
        refCount()
      );
    }
    return this.dataStream;
  }

  getNewPoints(): {value: number, time: Date}[] {  
    let currentTime = new Date();
    let pointArray: {value: number, time: Date}[] = [];

    for(let i = 0; i < this.pathNumber; i++) {
      let randomValue = this.getRandomValue(i+1);
      pointArray.push({ value: randomValue, time: currentTime })
    }
    
    return pointArray;
  }

  getRandomValue(pathIndex: number): number {
    let randomValue = Math.abs(Math.random() / pathIndex);
    
    return randomValue;
  }
}
