import * as React from 'react';

interface ComponentState {
	responseText: string;
}

import './FrameContainer.css';

export class FrameContainer extends React.Component<{}, ComponentState> {
	constructor(props: {}) {
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
		this.requestCORS('http://mhf.inven.co.kr/dataninfo/mhw/armor/');
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
