import React from "react"

export default class Three extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myName: props.location.query.name
		};
	}
	render() {
		return (
			<div>
				这是Three.js组件的界面 
				<div>接收到的参数值为{this.state.myName}</div>
			</div>
		)
	}
}
