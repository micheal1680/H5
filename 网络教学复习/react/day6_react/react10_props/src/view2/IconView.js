import React from "react";

export default class IconView extends React.Component {
	constructor(props) {
		super(props);
		//myAppObj接收到的是App对象
		this.myAppObj=props.appObj;
	}
	changeAge() {
		this.myAppObj.setAge(100);	
	}
	render() {
		return (
			<div>
				<button  onClick={this.changeAge.bind(this)}>这是子组件btn</button>
			</div>
		);
	}
}