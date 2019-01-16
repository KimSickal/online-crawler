import {
	createSelector,
} from 'reselect';

import {
	State,
} from '../reducers';

const getState = (state: State) => {
	return state.navigator;
};

export const getPath = createSelector([
	getState,
], (state) => {
	return state.path;
});

export const getIsOpen = createSelector([
	getState,
], (state) => {
	return state.isOpen;
});
