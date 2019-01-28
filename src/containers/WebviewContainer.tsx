import * as React from 'react';

import {
	WebviewTag,
} from 'electron';

const remote = (window as any).require('electron').remote;

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

import {
	RequestIpcKeys,
	ReceiveIpcKeys,
} from '../constants';

import './FrameContainer.css';

interface ComponentProps {
	path: ReturnType<typeof getPath>;
	isUpdateNeeded: ReturnType<typeof getIsUpdateNeeded>;

	updatePath: typeof updatePath;
	updateWebviewReceive: typeof updateWebviewReceive;
}

interface ComponentState {
	webviewBody: HTMLBodyElement | null;
}

class WebviewComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			webviewBody: null,
		};
		this.onLoad = this.onLoad.bind(this);
		this.goBack = this.goBack.bind(this);
		this.goForward = this.goForward.bind(this);
		this.getIpcResponse = this.getIpcResponse.bind(this);
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

	private getIpcResponse(event: Electron.IpcMessageEvent) {
		console.log(`received ipc response: ${event.channel}`);
		if(event.channel === ReceiveIpcKeys.RECEIVE_GET_BODY) {
			const body = document.createElement('body');
			body.innerHTML = event.args[0];
			body.querySelectorAll('div').forEach((div) => {
				console.log(div);
			});
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

		this.webview.addEventListener('ipc-message', this.getIpcResponse);

		this.webview.addEventListener('dom-ready', () => {
			if(this.webview === null) {
				return;
			}
			console.log('send message to webview');
			this.webview.openDevTools();
			this.webview.send(RequestIpcKeys.REQUEST_GET_BODY);
		});
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
				preload={remote.getGlobal('constants')['webviewPreLoaderUrl']}
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
