import React from 'react';

class TextView extends React.Component {
	constructor() {
	    super();
	}
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.content}</p>
			</div>
		);
	}
}

export default TextView;
