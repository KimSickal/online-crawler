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

interface ComponentState {
	responseText: string;
}
class FrameComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			responseText: '',
		};
	}

	private requestCORS(url: string) {
		const addressForCORS = 'https://cors-anywhere.herokuapp.com/';
		const request = new XMLHttpRequest();
		request.open('GET', addressForCORS + url);
		request.onreadystatechange = () => {
			if(request.readyState === request.DONE) {
				if (request.status === 200) {
					const iframeComponent = document.getElementById('iframe') as HTMLIFrameElement;
					if(iframeComponent === null) {
						return;
					}
					iframeComponent.src = URL.createObjectURL(request.response);
				}
			}
		};
		request.responseType = 'blob';
		request.send();
	}

	public componentDidMount() {
		const {
			path,
		} = this.props;

		this.requestCORS(path);
	}

	public componentDidUpdate(prevProps: ComponentProps) {
		const {
			path,
		} = this.props;

		if(prevProps.path !== path){
			this.requestCORS(path);
		}
	}

	public render() {
		return (
			<iframe
				id={'iframe'}
				src={''}
			>
				<p>
					{'Your browser does not support iframes.'}
				</p>
			</iframe>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		path: getPath(state),
	};
}

export const FrameContainer = connect(mapStateToProps)(FrameComponent);
