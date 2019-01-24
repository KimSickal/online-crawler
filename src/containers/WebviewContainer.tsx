import * as React from 'react';

import {
	WebviewTag,
} from 'electron';

import {
	Dispatch,
	AnyAction,
	bindActionCreators,
} from 'redux';

import {
	connect,
} from 'react-redux';

import {
	getPath,
	getIsUpdateNeeded,
} from '../selectors';

import {
	State,
} from '../reducers';

import {
	updatePath,
	updateWebviewReceive,
} from '../actions';

import './FrameContainer.css';

interface ComponentProps {
	path: ReturnType<typeof getPath>;
	isUpdateNeeded: ReturnType<typeof getIsUpdateNeeded>;

	updatePath: typeof updatePath;
	updateWebviewReceive: typeof updateWebviewReceive;
}

class WebviewComponent extends React.Component<ComponentProps> {
	constructor(props: ComponentProps) {
		super(props);
		this.onLoad = this.onLoad.bind(this);
		this.goBack = this.goBack.bind(this);
		this.goForward = this.goForward.bind(this);
	}

	private webview: WebviewTag | null = null;

	private onLoad() {
		const {
			path,
		} = this.props;

		if(this.webview === null) {
			return;
		}

		const currSrc = this.webview.getAttribute('src');

		if(currSrc !== null && currSrc !== path) {
			this.props.updatePath(currSrc);
		}
	}

	private goBack() {
		if(this.webview !== null) {
			this.webview.goBack();
			this.onLoad();
		}
	}

	private goForward() {
		if(this.webview !== null) {
			this.webview.goForward();
			this.onLoad();
		}
	}

	public componentDidMount() {
		const {
			path,
		} = this.props;

		if(this.webview === null) {
			return;
		}
		window.addEventListener('keydown', this.goBack);
		this.webview.addEventListener('load-commit', this.onLoad);
		this.webview.setAttribute('src', path);

		this.webview.addEventListener('dom-ready', () => {
			if(this.webview === null) {
				return;
			}
			console.log('send message to webview');
			this.webview.openDevTools();
			this.webview.send('crawling');
		});
		this.webview.addEventListener('ipc-message', (event: Electron.IpcMessageEvent) => {
			console.log(event.args);
		});
		console.log(`file://${__dirname}/webviewPreLoader.js`);
	}

	public componentWillUnmount() {
		if(this.webview === null) {
			return;
		}
		this.webview.removeEventListener('load-commit', this.onLoad);
	}

	public componentDidUpdate(prevProps: ComponentProps) {
		const {
			isUpdateNeeded,
		} = this.props;

		if(this.webview === null) {
			return;
		}

		if(isUpdateNeeded === false) {
			return;
		}

		this.webview.setAttribute('src', this.props.path);
		this.props.updateWebviewReceive();
	}

	public render() {
		return (
			<webview
				id={'iframe'}
				ref={(ref) => this.webview = ref as WebviewTag}
				// preload={`file://${__dirname}/webviewPreLoader.js`}
				preload={'file://./../../webviewPreLoader.js'}
			/>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		path: getPath(state),
		isUpdateNeeded: getIsUpdateNeeded(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		updatePath,
		updateWebviewReceive,
	}, dispatch);
}

export const WebviewContainer = connect(mapStateToProps, mapDispatchToProps)(WebviewComponent);
