import {
	WebviewTag,
} from 'electron';

import {
	WebviewKeys,
	SetWebviewElementAction,
	SetWebviewBodyAction,
} from './types';

export function setWebviewElement(element: WebviewTag): SetWebviewElementAction {
	return {
		type: WebviewKeys.SET_WEBVIEW_ELEMENT,
		element: element,
	};
}

export function setWebviewBody(body: HTMLBodyElement): SetWebviewBodyAction {
	return {
		type: WebviewKeys.SET_WEBVIEW_BODY,
		body: body,
	};
}
