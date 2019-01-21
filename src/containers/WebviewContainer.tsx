import * as React from 'react';

import {
	connect,
} from 'react-redux';

import {
	getPath,
} from '../selectors';

import {
	State,
} from '../reducers';

import './FrameContainer.css';

interface ComponentProps {
	path: ReturnType<typeof getPath>;
}

class WebviewComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			path,
		} = this.props;
		return (
			<webview
				id={'iframe'}
				src={path}
			/>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		path: getPath(state),
	};
}

export const WebviewContainer = connect(mapStateToProps)(WebviewComponent);
