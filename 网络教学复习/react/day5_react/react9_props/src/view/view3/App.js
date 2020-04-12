import React from 'react';
import TextView from "./TextView.js"
class App extends React.Component {
	constructor() {
	    super();
		this.state = {
			title:"这是在讲props"
		}
	}
	render() {
		return (
			<div>
				<TextView title={this.state.title}/>
			</div>
		)
	}
}

export default App;
