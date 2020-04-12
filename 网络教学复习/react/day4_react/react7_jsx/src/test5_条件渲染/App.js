import React from 'react';
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isShow: true
		}
	}
	show() {
		this.setState({isShow:!this.state.isShow});
	}
	render() {
		if (this.state.isShow)
			return <h1 onClick={this.show.bind(this)}> 播放 < /h1>;
		else
			return <h1 onClick={this.show.bind(this)}> 暂停 < /h1>;
	}
}
