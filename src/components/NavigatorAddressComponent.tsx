import * as React from 'react';

import {
	FaAngleDoubleUp,
	FaAngleDoubleDown,
	FaRedoAlt,
	FaSearch,
} from 'react-icons/fa';

import {
	updatePath,
	toggleOpen,
} from '../actions';

import {
	initialPath,
} from '../constants/path';

import './NavigatorAddressComponent.css';

interface ComponentProps {
	isOpen: boolean;

	updatePath: typeof updatePath;
	toggleOpen: typeof toggleOpen;
}

interface ComponentState {
	inputPath: string;
}

export class NavigatorAddressComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			inputPath: initialPath,
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
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
		this.props.updatePath('/');
		setTimeout(() => {
			this.props.updatePath(inputPath);
		}, 1);
	}

	private onKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
		if(event.charCode === 13) {
			this.onClick();
		}
		return false;
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
				className={'navigator_searchBar'}
			>
				<ExpandIconComponent
					className={'navigator_searchBar_icon'}
					onClick={this.props.toggleOpen}
				/>
				<FaRedoAlt
					className={'navigator_searchBar_icon'}
					onClick={this.onClick}
				/>
				<input
					className={'navigator_searchBar_input'}
					type={'text'}
					value={inputPath}
					onChange={this.onChange}
					onKeyPress={this.onKeyPress}
				/>
				<div
					className={'navigator_searchBar_button'}
					onClick={this.onClick}
				>
					<FaSearch
						className={'navigator_searchBar_icon'}
						style={{
							marginLeft: '4.5px',
							marginTop: '2.5px',
						}}
					/>
				</div>
			</div>
		);
	}
}
