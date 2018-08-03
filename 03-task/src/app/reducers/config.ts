import * as fromConfigActions from "../actions/configActions";
import { PathData } from "../models/PathData";
import { Config } from "../models/Config";

export function configReducer(state: {data: PathData[], config: Config[]}, action: fromConfigActions.ConfigAction) {
	switch (action.type) {
        case fromConfigActions.SET_COLOR: {
            let newConfig: Config[] = [];
            if (state.config) {
                newConfig = [...state.config];    
			}
			newConfig[action.payload.index].color = action.payload.color;
			let newState = { 
				...state, 
				config: newConfig
			}
			return newState;
		}

		case fromConfigActions.SET_VISIBILITY: {
            let newConfig: Config[] = [];
            if (state.config) {
                newConfig = [...state.config];    
			} 
			newConfig[action.payload.index].isVisible = action.payload.isVisible;
			let newState = { 
				...state, 
				config: newConfig
			}
			return newState;
		}

		case fromConfigActions.INIT_CONFIG_SUCCESS: {
			return {...state, config: action.payload}
		}

		default:
			return state;
	}
}