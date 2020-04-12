import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

import Home from "./Home.js";
import First from "./First.js";
import Second from "./Second.js";
import Three from "./Three.js";
import Four from "./Four.js";
//要放在import之后
const myHistory = createHashHistory();

export default class App extends React.Component {
	constructor() {
	    super();
	}
	render() {
		 return (
			<Router history={myHistory}>
				<Route exact={true} path="/" component={Home} />
				<Route path="/first" component={First} />
				<Route path="/second/:id" component={Second} />
				<Route path="/Three" component={Three} />
				<Route path="/four" component={Four} />
			</Router>
		);
	}
}
/***
http://127.0.0.1:3000/
http://127.0.0.1:3000/stu
http://127.0.0.1:3000/home/stu
http://127.0.0.1:3000/sdfsa/dsf/dfas
*/
