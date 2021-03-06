import * as React from 'react';

import {
	Dispatch,
	AnyAction,
	bindActionCreators,
} from 'redux';

import {
	connect,
} from 'react-redux';

import {
	updatePath,
	toggleOpen,
	updateWebviewRequest,
} from '../actions';

import {
	State,
} from '../reducers';

import {
	getIsOpen,
	getPath,
} from '../selectors';

import {
	NavigatorAddressComponent,
	// NavigatorQueryComponent,
} from '../components';

import './NavigatorContainer.css';

interface ComponentProps {
	isOpen: boolean;
	path: ReturnType<typeof getPath>;

	updatePath: typeof updatePath;
	updateWebviewRequest: typeof updateWebviewRequest;
	toggleOpen: typeof toggleOpen;
}

class NaviagtorComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			isOpen,
		} = this.props;
		return (
			<div
				className={'navigator'}
				style={{
					height: isOpen ? '300px' : undefined,
				}}
			>
				<NavigatorAddressComponent
					{...this.props}
				/>
				{/* <NavigatorQueryComponent
					{...this.props}
				/> */}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		path: getPath(state),
		isOpen: getIsOpen(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		updatePath,
		updateWebviewRequest,
		toggleOpen,
	}, dispatch);
}

export const NavigatorContainer = connect(mapStateToProps, mapDispatchToProps)(NaviagtorComponent);
