import {
	NavigatorAction,
	NavigatorKeys,
} from '../actions/types';

export interface NavigatorState {
	path: string | null;
}

const initialNavigatorState: NavigatorState = {
	path: null,
};

export function navigator(state = initialNavigatorState, action: NavigatorAction) {
	switch(action.type) {
		case NavigatorKeys.UPDATE_PATH:
			return {
				...state,
				path: action.path,
			};
		default:
			return state;
	}
}
