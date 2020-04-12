import React from "react";
import StuList from "./StuList.js";
export default class App extends React.Component {
	constructor() {
		super();
		this.list = new StuList();
	}
	render() {
		return (
			<div>
				<h1>这是对StuList的测试</h1>
				{this.list.getInf()},
				<h1>这是对StuList的测试</h1>
				{this.list.getInf()}
			</div>
		);
	}
}
