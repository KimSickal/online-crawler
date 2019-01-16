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
