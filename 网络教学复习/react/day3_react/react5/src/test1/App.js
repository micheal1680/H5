import React from "react";
class App extends React.Component {
	constructor() {
		super();
	}
	getView(isShow) {
		if (isShow === 3) {
			return <div> 你是对的 < /div>;
		} else {
			return <div> 错误答案 < /div>;
		}
	}
	render() {
		return this.getView(3);
	}
}
export default App;
