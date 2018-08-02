import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs'
import { Action } from "@ngrx/store";
import { DataService } from '../data.service';
import { DataActions } from "../actions/dataActions";
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class DataEffects {
    constructor(
        private actions$: Actions,
        private dataService: DataService,
        private dataActions: DataActions
    ) { }

    @Effect()
    loadBlogs$: Observable<Action> = this.actions$
        .ofType(DataActions.LOAD_NEW_POINTS)
        .pipe(
            switchMap(() => this.dataService.updateData()), //Do I need the whole data or just new points?..l
            map((blogs: any) => this.dataActions.loadPointsSuccess(blogs)) //implement an ability to provide payload
        );
}