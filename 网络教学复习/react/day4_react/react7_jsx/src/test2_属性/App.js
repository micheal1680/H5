/**
 * 学习属性,如果属性的名字为class要改为className
 */
import React from 'react';
import "../App.css";
export default class App extends React.Component {
	constructor() {
	    super();
		this.state = {
			index:0,
		}
	}
	setIndex() {
		if(this.state.index==0) {
			this.setState({index:1});
		}else if(this.state.index==1) {
			this.setState({index:0});
		}
	}
	render() {
		let index = this.state.index;
		return (
			<div className="style1">
				 <h1 align="right" className="style2">{index == 1 ? '真' : '假'}</h1>
				 <button onClick={this.setIndex.bind(this)}>改变</button>
				<input type="button" value="按钮" disabled/>
				<input type="button" value="按钮" disabled={false} />
			</div>
		);
	}
}
