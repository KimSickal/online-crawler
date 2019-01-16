export enum NavigatorKeys {
	UPDATE_PATH = 'UPDATE_PATH',
	TOGGLE_OPEN = 'TOGGLE_OPEN',
}

export interface UpdatePathAction {
	type: NavigatorKeys.UPDATE_PATH;
	path: string;
}

export interface ToggleOpenAction {
	type: NavigatorKeys.TOGGLE_OPEN;
}

export type NavigatorAction = (
	| UpdatePathAction
	| ToggleOpenAction
);
