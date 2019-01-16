import {
	NavigatorKeys,
	UpdatePathAction,
} from './types';

export function updatePath(path: string): UpdatePathAction {
	return {
		type: NavigatorKeys.UPDATE_PATH,
		path: path,
	};
}
