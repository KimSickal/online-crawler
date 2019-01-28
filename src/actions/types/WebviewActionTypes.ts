import {
	WebviewTag,
} from 'electron';

export enum WebviewKeys {
	SET_WEBVIEW_ELEMENT = 'SET_WEBVIEW_ELEMENT',
	SET_WEBVIEW_BODY = 'SET_WEBVIEW_BODY',
}

export interface SetWebviewElementAction {
	type: WebviewKeys.SET_WEBVIEW_ELEMENT;
	element: WebviewTag;
}

export interface SetWebviewBodyAction {
	type: WebviewKeys.SET_WEBVIEW_BODY;
	body: HTMLBodyElement;
}

export type WebviewAction = (
	| SetWebviewBodyAction
	| SetWebviewElementAction
);
