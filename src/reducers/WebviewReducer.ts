import {
	WebviewTag,
} from 'electron';

import {
	WebviewAction,
	WebviewKeys,
} from '../actions';

export interface WebviewState {
	element: WebviewTag | null;
	body: HTMLBodyElement | null;
}

const initialWebviewState: WebviewState = {
	element: null,
	body: null,
};

export function webview(state = initialWebviewState, action: WebviewAction): WebviewState {
	switch(action.type) {
		case WebviewKeys.SET_WEBVIEW_BODY:
			return {
				...state,
				body: action.body,
			};
		case WebviewKeys.SET_WEBVIEW_ELEMENT:
			return {
				...state,
				element: action.element,
			};
		default:
			return state;
	}
}
