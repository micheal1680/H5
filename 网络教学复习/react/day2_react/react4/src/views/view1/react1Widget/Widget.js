import React from "react";
import "./Widget.css";
class Widget extends React.Component {
	constructor() {
	    super();
	}
	render() {
		return (
			<ul>
				<li>存在</li>
				<li>数论</li>
				<li>粒子论</li>
			</ul>
		);
	}
}
export default Widget;