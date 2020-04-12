/**
 *  学习动态的修改属性的值
 */
import React from 'react';
import "../App.css";
export default class App extends React.Component {
	constructor() {
	    super();
		this.state = {
			styleName:"style1",
			alignName:"left",
		}
		
	}
	change() {
		//修改className的值
		this.setState({styleName:"style2", alignName:"center"});
	}
	render() {
		return (
			<div>
				<p align={this.state.alignName} className={this.state.styleName}>这是一个段落</p>
				<input onClick={this.change.bind(this)} type="button" value="按钮"/>
			</div>
		);
	}
}
