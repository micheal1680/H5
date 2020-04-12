import React from 'react';
import Names from "./Names.js";
class List extends React.Component {
	constructor() {
	    super();
	}
	render() {
		return (
			<div>
				<ul id="dx">
					<li>格物</li>
					<li>知智</li>
					<li>意得</li>
					<li>心正</li>
					<li>修身</li>
				</ul>
				<h1>在List中导入Names</h1>
				<Names />
			</div>
		)
	}
}
export default List;