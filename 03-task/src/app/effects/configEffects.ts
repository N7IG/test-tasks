import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs'
import { Action } from "@ngrx/store";
import { ConfigService } from '../config.service';
import * as fromConfigActions from "../actions/configActions";
import { map, switchMap } from 'rxjs/operators';
import { Config } from '../models/Config';

@Injectable()
export class ConfigEffects {
    constructor(
        private actions$: Actions 
        //and configService
    ) { }

    @Effect()
    loadBlogs$: Observable<Action> = this.actions$
        .ofType(fromConfigActions.INIT_CONFIG)
        .pipe(
            switchMap((action: fromConfigActions.InitializeConfig) => {
                
                return new ConfigService().getRandomConfig(action.payload) //TODO: dep injection instead of new Service
            }), 
            map((configs: Config[]) => {
                return new fromConfigActions.InitializeConfigSuccess(configs);
            }) 
        );
}