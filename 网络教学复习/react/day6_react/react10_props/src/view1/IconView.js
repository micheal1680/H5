import React from "react";

export default class IconView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age:20
		}
		this.setAge=props.setAgeM;
	}
	changeAge() {
		console.log("sfsdfsd");
		this.setAge(100);
	}
	render() {
		return (
			<div>
				<div>{this.state.age}</div>
				<button  onClick={this.changeAge.bind(this)}>这是子组件btn</button>
			</div>
		);
	}
}