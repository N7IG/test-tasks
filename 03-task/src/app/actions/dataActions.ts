import { Action } from '@ngrx/store'

// @Injectable()
// export class DataActions {
//     static LOAD_NEW_POINTS = 'LOAD_NEW_POINTS';
//     loadNewPoints(): Action {
//         return {
//             type: DataActions.LOAD_NEW_POINTS
//         };
//     }

//     static LOAD_POINTS_SUCCESS = 'LOAD_POINTS_SUCCESS';
//     loadPointsSuccess(pointArray: number[]) {
//         return {
//             type: DataActions.LOAD_POINTS_SUCCESS,
//             payload: pointArray
//             //here shold be a payload
//         };
//     }
// }

export const LOAD_NEW_POINTS = 'LOAD_NEW_POINTS';
export const LOAD_POINTS_SUCCESS = 'LOAD_POINTS_SUCCESS';

export class LoadNewPoints implements Action {
    readonly type = LOAD_NEW_POINTS;
}

export class LoadPointsSuccess implements Action {
    readonly type = LOAD_POINTS_SUCCESS;
    constructor(public payload: any) {}
}

export type DataAction = LoadNewPoints | LoadPointsSuccess;
  
  