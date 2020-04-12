import React from 'react';
import IconView from "./IconView.js";
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			age:20
		}
	}
	setAge(myAge){
	   this.setState({
		   age:myAge
	   });  
	}
	render() {
		return (
			<div>
				<div>{this.state.age}</div>
				<IconView  appObj={this}></IconView>
			</div>
		);
	}
}

 
