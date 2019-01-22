export enum NavigatorKeys {
	UPDATE_PATH = 'UPDATE_PATH',
	TOGGLE_OPEN = 'TOGGLE_OPEN',
	UPDATE_WEBVIEW_REQUEST = 'UPDATE_WEBVIEW_REQUEST',
	UPDATE_WEBVIEW_RECEIVE = 'UPDATE_WEBVIEW_RECEIVE',
}

export interface UpdatePathAction {
	type: NavigatorKeys.UPDATE_PATH;
	path: string;
}

export interface ToggleOpenAction {
	type: NavigatorKeys.TOGGLE_OPEN;
}

export interface UpdateWebviewRequestAction {
	type: NavigatorKeys.UPDATE_WEBVIEW_REQUEST;
}

export interface UpdateWebviewReceiveAction {
	type: NavigatorKeys.UPDATE_WEBVIEW_RECEIVE;
}

export type NavigatorAction = (
	| UpdatePathAction
	| ToggleOpenAction
	| UpdateWebviewRequestAction
	| UpdateWebviewReceiveAction
);
