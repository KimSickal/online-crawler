import {
	NavigatorKeys,
	UpdatePathAction,
	ToggleOpenAction,
} from './types';

export function updatePath(path: string): UpdatePathAction {
	return {
		type: NavigatorKeys.UPDATE_PATH,
		path: path,
	};
}

export function toggleOpen(): ToggleOpenAction {
	return {
		type: NavigatorKeys.TOGGLE_OPEN,
	};
}
