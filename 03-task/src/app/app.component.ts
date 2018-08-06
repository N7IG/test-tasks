import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { PathData } from './models/PathData';
import { Config } from './models/Config';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromConfigActions from "./actions/configActions";
import { AppState } from './models/State';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app';
  allData:  PathData[]; 
  subscription: any;

  config$: Observable<Config[]>;

  constructor(private dataService: DataService, 
    private store: Store<AppState>
  ) { } 

  ngOnInit() {
    this.getData();
    this.config$ = this.store.select('config');
  }

  getData(): void {
    this.subscription = this.dataService.updateData().subscribe(
      (values: {value: number, time: Date}[]) => {
        if (!this.allData) {
          this.allData = values.map(() => []);
          this.store.dispatch(new fromConfigActions.InitializeConfig(values.length));
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
    this.store.dispatch(new fromConfigActions.SetColor(config));
  }

  toggleVisibility(config: {isVisible: boolean, index: number}) {
    this.store.dispatch(new fromConfigActions.SetVisibility(config));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

