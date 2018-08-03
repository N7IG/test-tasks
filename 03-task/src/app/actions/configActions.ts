import { Action } from '@ngrx/store'
import { Config } from '../models/Config';

export const SET_COLOR = 'SET_COLOR';
export const INIT_CONFIG = 'INIT_CONFIG';
export const INIT_CONFIG_SUCCESS = 'INIT_CONFIG_SUCCESS';
export const SET_VISIBILITY = 'SET_VISIBILITY';

export class SetColor implements Action {
    readonly type = SET_COLOR;
    constructor(public payload: {color: string, index: number}) {}
}

export class SetVisibility implements Action {
    readonly type = SET_VISIBILITY;
    constructor(public payload: {isVisible: boolean, index: number}) {}
}

export class InitializeConfig implements Action {
    readonly type = INIT_CONFIG;
    constructor(public payload: number) {}
}

export class InitializeConfigSuccess implements Action {
    readonly type = INIT_CONFIG_SUCCESS;
    constructor(public payload: Config[]) {}
}

export type ConfigAction = SetColor | InitializeConfig | InitializeConfigSuccess | SetVisibility;