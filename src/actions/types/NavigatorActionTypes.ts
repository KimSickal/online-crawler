export enum NavigatorKeys {
	UPDATE_PATH = 'UPDATE_PATH',
}

export interface UpdatePathAction {
	type: NavigatorKeys.UPDATE_PATH;
	path: string;
}

export type NavigatorAction = (
	| UpdatePathAction
);
