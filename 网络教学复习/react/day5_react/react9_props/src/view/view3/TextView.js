import React from 'react';

class TextView extends React.Component {
	//名字了props不可改
	constructor(props) {
	    super();
		this.state= {
			myTitle:props.title
		}
	}
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h1>{this.state.myTitle}</h1>
			</div>
		);
	}
}

export default TextView;
