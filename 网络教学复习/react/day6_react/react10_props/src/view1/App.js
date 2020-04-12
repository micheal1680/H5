import React from 'react';
import IconView from "./IconView.js";
export default class App extends React.Component {
	constructor() {
		super();
	}
	setAge(myAge){
	     this.setState({age:myAge})
	}
	render() {
		return (
			<div>
				<IconView  setAgeM={this.setAge}></IconView>
			</div>
		);
	}
}

 
