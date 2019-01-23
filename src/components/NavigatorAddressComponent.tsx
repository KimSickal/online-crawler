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
	updateWebviewRequest,
} from '../actions';

import './NavigatorAddressComponent.css';

interface ComponentProps {
	isOpen: boolean;
	path: string;

	updatePath: typeof updatePath;
	updateWebviewRequest: typeof updateWebviewRequest;
	toggleOpen: typeof toggleOpen;
}

interface ComponentState {
	inputPath: string;
}

export class NavigatorAddressComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			inputPath: this.props.path,
		};
		this.onChange = this.onChange.bind(this);
		this.onClickSearch = this.onClickSearch.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
	}

	private onChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			inputPath: event.target.value,
		});
	}

	private onClickSearch() {
		const {
			inputPath,
		} = this.state;

		this.props.updatePath(inputPath);
		this.props.updateWebviewRequest();
	}

	private onKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
		if(event.charCode === 13) {
			this.onClickSearch();
		}
		return false;
	}

	public componentDidUpdate(prevProps: ComponentProps) {
		if(prevProps.path !== this.props.path) {
			this.setState({
				inputPath: this.props.path,
			});
		}
	}

	public render() {
		const {
			inputPath,
		} = this.state;

		const {
			isOpen,
		} = this.props;

		const ExpandIconComponent = isOpen ? FaAngleDoubleUp : FaAngleDoubleDown;

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
					onClick={this.props.updateWebviewRequest}
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
					onClick={this.onClickSearch}
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
