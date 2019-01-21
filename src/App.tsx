import * as React from 'react';

import {
	createStore,
	applyMiddleware,
} from 'redux';

import {
	Provider,
} from 'react-redux';

import thunk from 'redux-thunk';

import {
	// FrameContainer,
	NavigatorContainer,
	WebviewContainer,
} from './containers';

import {
	reducers,
} from './reducers';

import './App.css';

export class App extends React.Component {
	public render() {
		return (
			<Provider
				store={createStore(reducers, applyMiddleware(thunk))}
			>
				<div className="App">
					{/* <FrameContainer /> */}
					<WebviewContainer />
					<NavigatorContainer />
				</div>
			</Provider>
		);
	}
}
