import React from "react"
import { Link } from "react-router-dom";

export default class Home extends React.Component {
	constructor() {
	    super();
		this.state = {
			id:100
		}
	}
	toFirst() {
		this.props.history.push("/first");
	}
	toSecond() {
		let name='小明';
		// this.props.history.push(`/second/${this.state.id}`);
		this.props.history.push(`/second/${name}`);
	}
	toThree() {
		this.props.history.push({pathname:"/Three", query: { name: '吴恩..' } });
	}
	toFour() {
		this.props.history.push({pathname:"/four", state: { name: '吴恩..' } });
	}
	render() {
		return (
			<ul>
				<li onClick={this.toFirst.bind(this)}>js第一页</li>
				<li> <Link to="/first">link第一页</Link></li>
				<li onClick={this.toSecond.bind(this)}>js第二页</li>
				<li><Link to={`/second/${this.state.id}`}>link第二页</Link></li>
				<li>
					<Link to={{pathname:"/Three", query: { name: '王东岳' } }}>
					   link第三页-query
					</Link>
				</li>
				<li onClick={this.toThree.bind(this)}>js第三页-query</li>
				
				<li>
					<Link to={{ pathname: "/four", state: { name: "茜" } }}>
					     Link跳转带参数-state
					</Link>
				</li>
				
				<li onClick={this.toFour.bind(this)}>js第四页-state</li>
				
			</ul>
		)
	}
}