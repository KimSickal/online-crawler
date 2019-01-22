import {
	NavigatorAction,
	NavigatorKeys,
} from '../actions/types';

import {
	initialPath,
} from '../constants/path';

export interface NavigatorState {
	path: string;
	isUpdateNeeded: boolean;
	isOpen: boolean;
}

const initialNavigatorState: NavigatorState = {
	path: initialPath,
	isUpdateNeeded: true,
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
		case NavigatorKeys.UPDATE_WEBVIEW_REQUEST:
			return {
				...state,
				isUpdateNeeded: true,
			};
		case NavigatorKeys.UPDATE_WEBVIEW_RECEIVE:
			return {
				...state,
				isUpdateNeeded: false,
			};
		default:
			return state;
	}
}
