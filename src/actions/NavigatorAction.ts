import {
	NavigatorKeys,
	UpdatePathAction,
	ToggleOpenAction,
	UpdateWebviewRequestAction,
	UpdateWebviewReceiveAction,
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

export function updateWebviewRequest(): UpdateWebviewRequestAction {
	return {
		type: NavigatorKeys.UPDATE_WEBVIEW_REQUEST,
	};
}

export function updateWebviewReceive(): UpdateWebviewReceiveAction {
	return {
		type: NavigatorKeys.UPDATE_WEBVIEW_RECEIVE,
	};
}
