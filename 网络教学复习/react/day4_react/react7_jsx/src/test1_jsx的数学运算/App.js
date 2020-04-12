/**
 * 学习运算符 {1+2}
 */
import React from 'react';
export default class App extends React.Component {
	constructor() {
	    super();
	}
	render() {
		let a = 1 + 2;
		let b = "one";
		return (
			<div>
				{a+b}
				<h1>fdsfds</h1>
				<span>fsdfsd</span>
			</div>
		);
	}
}
