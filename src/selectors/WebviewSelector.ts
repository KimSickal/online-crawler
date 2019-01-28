import {
	State,
} from '../reducers';

import {
	createSelector,
} from 'reselect';

const getState = (state: State) => {
	return state.webview;
};

export const getWebviewElement = createSelector([
	getState,
], (state) => {
	return state.element;
});

export const getWebviewBody = createSelector([
	getState,
], (state) => {
	return state.body;
});
