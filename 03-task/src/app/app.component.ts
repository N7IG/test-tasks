import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { PathData } from './models/PathData';
import { Config } from './models/Config';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataActions } from './actions/dataActions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app';
  allData:  PathData[]; //this should be in Store 
  allConfig: Config[]; //as well as this
  subscribtion: any;

  counter: Observable<number>;

  constructor(private dataService: DataService, 
    private store: Store<AppState>,
    private dataActions: DataActions
  ) { 
    this.counter = store.select('counter');
  }

  ngOnInit() {
    // this.getData();
    this.getNewData();
    //here i should dispatch action
    //  -> effect works and fetches new points, dispatching its own action 
    //  -> reducer works? updating the state
  }

  getNewData() { //rename
    this.store.dispatch(this.dataActions.loadNewPoints());
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