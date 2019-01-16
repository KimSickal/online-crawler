import * as React from 'react';

import {
	FrameContainer,
} from './containers';

import './App.css';

export class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<FrameContainer />
			</div>
		);
	}
}
