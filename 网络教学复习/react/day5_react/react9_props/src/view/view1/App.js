import React from 'react';
import TextView from "./TextView.js"
class App extends React.Component {
	constructor() {
	    super();
		this.state = {
			content:"人的名字很多ss"
		}
	}
	render() {
		return (
			<div>
				<TextView title="人名" content={this.state.content}/>
			</div>
		)
	}
}

export default App;
