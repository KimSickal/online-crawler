import {
	NavigatorAction,
	NavigatorKeys,
} from '../actions/types';

import {
	initialPath,
} from '../constants/path';

export interface NavigatorState {
	path: string;
	isOpen: boolean;
}

const initialNavigatorState: NavigatorState = {
	path: initialPath,
	isOpen: true,
};

export function navigator(state = initialNavigatorState, action: NavigatorAction) {
	const {
		isOpen,
	} = state;

	switch(action.type) {
		case NavigatorKeys.UPDATE_PATH:
			return {
				...state,
				path: action.path,
			};
		case NavigatorKeys.TOGGLE_OPEN:
			return {
				...state,
				isOpen: !isOpen,
			};
		default:
			return state;
	}
}
