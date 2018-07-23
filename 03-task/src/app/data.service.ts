import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // getData(): Observable<[ Date, number][]>{
  //   return of('hey').pipe(map(() => {
  //     return [[new Date('1995-12-17T03:24:00'), 1], [new Date('1995-12-17T03:25:00'), 2], [new Date('1995-12-17T03:26:00'), 3], [new Date('1995-12-17T03:27:00'), 4]];
  //   }));
  // }

  getData(): Observable<(number | Date )[][]> {
    return of('hey').pipe(map(() => [[new Date('1995-12-17T03:24:00'), 1], [new Date('1995-12-17T03:25:00'), 2]]));
  }
}

// of('hey').pipe(map(() => [[new Date('1995-12-17T03:24:00'), 1], [new Date('1995-12-17T03:25:00'), 2]]));

//TODO: (number | Date )[][]
