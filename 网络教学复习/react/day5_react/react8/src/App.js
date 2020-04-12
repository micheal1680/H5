import React from 'react';
export default class App extends React.Component {
	constructor() {
		super();
		this.state={
			id:1,
			list:[
				{name:'宝钗',age:23,id:1},
				{name:'王熙凤',age:30,id:3},
				{name:'巧儿',age:3,id:12},
				{name:'探春',age:13,id:6},
			]
		}
	}
	list() {
		const listItems = this.state.list.map((item)=>{
			return <tr key={item.id} ><td>{item.name}</td><td>{item.age}</td><td>{item.id}</td></tr>
		});
		return listItems;
	}
	changeInput(e) {
		// console.log(e.target.value);
		this.setState({id:e.target.value});
	}
	changeById() {
		// console.log(this.state.list);
		for(let i=0; i<this.state.list.length; i++) {
			if(this.state.list[i].id==this.state.id) {
				this.state.list[i].age=100;
			}
		}
		console.log(this.state.list);
		this.setState({list:this.state.list});
	}
	render() {
		return (
			<div>
				<table border="1" cellspacing="0" cellpadding="2">
					<tr><th>name</th><th>age</th><th>id</th></tr>
					{this.list()}
				</table>
				<input type="text" onChange={this.changeInput.bind(this)}  
					value={this.state.id}/>
				<button onClick={this.changeById.bind(this)}>点我</button>
			</div>
		);
	}
}