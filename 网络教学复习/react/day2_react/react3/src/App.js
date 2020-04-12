import React from 'react';
import List from './List.js';
import Names from './Names';
import "./List.css";
//图:属于离散数学 
class App extends React.Component {
	constructor() {
	    super();
	}
	render() {
		return (
			<div>
				大学
				<button>点我</button>
				<List />
				<h1>我喜欢的人</h1>
				<Names />
			</div>
		);
	}
} 
export default App;
