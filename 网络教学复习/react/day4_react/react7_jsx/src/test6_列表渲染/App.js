import React from 'react';
import "./App.css";
export default class App extends React.Component {
	constructor() {
		super();
		this.state={
			list:[
				{name:'宝钗',age:23,    id:1},
				{name:'王熙凤',age:30,  id:3},
				{name:'巧儿',age:3,     id:12},
				{name:'探春',age:23,    id:6},
			]
		}
	}
	list() {
		const listItems = this.state.list.map((person)=>{
			return <tr key={person.id} className="tables"><td>{person.name}</td><td>{person.age}</td><td>{person.id}</td></tr>
		});
		return listItems;
	}
	render() {
		return (
			<table border="1" cellspacing="0" cellpadding="2">
				<tr><th>name</th><th>age</th><th>id</th></tr>
				{this.list()}
			</table>
		);
	}
}
