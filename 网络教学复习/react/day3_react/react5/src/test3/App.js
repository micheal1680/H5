import React from "react";
import "./App.css";
class App extends React.Component {
	constructor() {
		super();
	}
	getButton() {
		return (
			<div>
				<span>首页</span>
				<span>返回</span>
				<span>进入</span>
			</div>
		)
	}
	getView(isShow) {
		return <div>
			这是getView<br />
			{this.getButton()};
		</div>
	}
	render() {
		return this.getView(3);
	}
}
export default App;
