import React from "react"

export default class Four extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myName: props.location.state.name
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