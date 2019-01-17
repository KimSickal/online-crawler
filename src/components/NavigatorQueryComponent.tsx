import * as React from 'react';

import './NavigatorQueryComponent.css';

interface ComponentProps {
	isOpen: boolean;
}

export class NavigatorQueryComponent extends React.Component<ComponentProps> {
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
				{'asdf'}
			</div>
		);
	}
}
