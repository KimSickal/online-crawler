import * as React from 'react';

import './NavigatorQueryComponent.css';

interface ComponentProps {
	isOpen: boolean;
}

interface ComponentState {
	outerQuery: string | null;
	innerQuery: string | null;
}

export class NavigatorQueryComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			outerQuery: null,
			innerQuery: null,
		};
	}

	// private onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
	// 	if(event.target.name === 'innerQuery') {

	// 	}
	// }

	// private selector() {
	// 	document.querySelectorAll('asdf').forEach((category) => {
	// 		category.querySelectorAll('asdf').forEach(())
	// 	})
	// }

	public render() {
		const {
			isOpen,
		} = this.props;

		return (
			<div
				className={'navigator_query'}
				style={{
					opacity: isOpen? undefined : 0,
					pointerEvents: isOpen? undefined: 'none',
				}}
			>
				<div
					className={'navigator_query_row'}
				>
					<div
						className={'navigator_query_row_cell'}
					>
						<p
							className={'navigator_query_row_cell_label'}
						>
							{'asdf'}
						</p>
						<input
							className={'navigator_query_row_cell_input'}
						/>
					</div>
					<div
						className={'navigator_query_row_cell'}
					>
						<p
							className={'navigator_query_row_cell_label'}
						>
							{'asdf'}
						</p>
						<input
							className={'navigator_query_row_cell_input'}
						/>
					</div>
				</div>
			</div>
		);
	}
}
