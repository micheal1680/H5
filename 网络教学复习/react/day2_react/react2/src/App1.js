import React from 'react';
import "./App1.css";
import test from "./test.png";//显示图片
class App1 extends React.Component {
	constructor() {
	    super();
	}
	render() {
		return (
		  <div>
		    这是一个测试
			<span>测试</span>
			<span>效果</span>
			显示图片
			<img src={test}></img>
		  </div>
		);
	}
}
export default App1;
