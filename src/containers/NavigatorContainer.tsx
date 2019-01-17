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
	FaAngleDoubleUp,
	FaAngleDoubleDown,
	FaRedoAlt,
	FaArrowLeft,
	FaSearch,
} from 'react-icons/fa';

import {
	updatePath,
	toggleOpen,
} from '../actions';

import {
	State,
} from '../reducers';

import {
	getIsOpen,
} from '../selectors';

import {
	initialPath,
} from '../constants/path';

import './NavigatorContainer.css';

interface ComponentProps {
	isOpen: boolean;

	updatePath: typeof updatePath;
	toggleOpen: typeof toggleOpen;
}

interface ComponentState {
	inputPath: string;
}

class NaviagtorComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			inputPath: initialPath,
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	private onChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			inputPath: event.target.value,
		});
	}

	private onClick() {
		const {
			inputPath,
		} = this.state;
		this.props.updatePath(inputPath);
	}

	public render() {
		const {
			inputPath,
		} = this.state;

		const {
			isOpen,
		} = this.props;

		const ExpandIconComponent = isOpen ? FaAngleDoubleDown : FaAngleDoubleUp;

		return (
			<div
				className={'navigator'}
				style={{
					height: isOpen ? '300px' : undefined,
				}}
			>
				<div
					className={'navigator_searchBar'}
				>
					<FaArrowLeft
						className={'navigator_searchBar_icon'}
					/>
					<ExpandIconComponent
						className={'navigator_searchBar_icon'}
						onClick={this.props.toggleOpen}
					/>
					<FaRedoAlt
						className={'navigator_searchBar_icon'}
					/>
					<input
						className={'navigator_searchBar_input'}
						type={'text'}
						value={inputPath}
						onChange={this.onChange}
					/>
					<FaSearch
						className={'navigator_searchBar_icon navigator_searchBar_button'}
						onClick={this.onClick}
					>
						{'Go'}
					</FaSearch>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		isOpen: getIsOpen(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		updatePath,
		toggleOpen,
	}, dispatch);
}

export const NavigatorContainer = connect(mapStateToProps, mapDispatchToProps)(NaviagtorComponent);
