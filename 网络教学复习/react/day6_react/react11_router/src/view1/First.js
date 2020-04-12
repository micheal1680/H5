import React from "react"
import { Link } from "react-router-dom";
export default class First extends React.Component {
	constructor() {
	    super();
		this.state = {
			s1:{
				backgroundColor:"red",
				width:"500px",
				height:"300px",
			}
		}
	}
	render() {
		return (
			<div style={this.state.s1}>
				这是第一页
				<li> <Link to="/">返回Home</Link></li>
			</div>
		)
	}
}