import { Action } from '@ngrx/store';
import * as fromDataActions from "../actions/dataActions";

export function dataReducer(state: any = {}, action: fromDataActions.DataAction) {
	switch (action.type) {
		case fromDataActions.LOAD_POINTS_SUCCESS:
			return { ...state, data: action.payload };

		default:
			return state;
	}
}