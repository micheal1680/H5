import React from 'react';
import TextView from "./TextView.js"
class App extends React.Component {
	constructor() {
	    super();
		this.state = {
			content:"人的名字很多"
		}
	}
	getList() {
		let list = [
			{id:1, name:'小明1', age:10},
			{id:2, name:'小明2', age:20},
			{id:3, name:'小明3', age:30},
		]
		this.setState({content:list});
	}
	render() {
		return (
			<div>
				<TextView content={this.state.content}/>
				<button onClick={this.getList.bind(this)}>显示列表</button>
			</div>
		)
	}
}

export default App;
