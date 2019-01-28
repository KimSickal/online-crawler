import {
	combineReducers,
} from 'redux';

import {
	NavigatorState,
	navigator,
} from './NavigatorReducer';

import {
	WebviewState,
	webview,
} from './WebviewReducer';

export interface State {
	navigator: NavigatorState;
	webview: WebviewState;
}

export const reducers = combineReducers<State>({
	navigator,
	webview,
});
