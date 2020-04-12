import React from "react"
import {
	Link
} from "react-router-dom";

export default class Second extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myId: props.match.params.id
		};
	}

	render() {
		return (
			<div>
				这是Second.js组件的界面 
				<div>接收到的参数值为{this.state.myId}</div>
			</div>
		)
	}
}
