import React from "react";
import "./Widget.css";
class Widget extends React.Component {
	constructor() {
	    super();
	}
	render() {
		return (
			<div>
				<ul>
					<li>神学</li>
					<li>宗教</li>
					<li>哲学</li>
					<li>科学</li>
				</ul>
			</div>
		);
	}
}
export default Widget;