import {
	combineReducers,
} from 'redux';

import {
	NavigatorState,
	navigator,
} from './NavigatorReducer';

export interface State {
	navigator: NavigatorState;
}

export const reducers = combineReducers<State>({
	navigator,
});
