import React from "react";
import "./Home.css";
import Widget1 from "../react1Widget/Widget.js";
import Widget2 from "../react2Widget/Widget.js";
class Home extends React.Component {
	constructor() {
	    super();
	}
	render() {
		return (
			<div id="HomeDiv">
				这是主页
				1111<br />
				<Widget1 />
				222<br />
				<Widget2 />
			</div>
		);
	}
}
export default Home;