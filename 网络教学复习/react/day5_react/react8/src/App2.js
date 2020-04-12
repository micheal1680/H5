import React from 'react';
export default class App extends React.Component {
	constructor() {
		super();
		this.state={
			list:[
				{name:'宝钗',age:23,id:1},
				{name:'王熙凤',age:30,id:3},
				{name:'巧儿',age:3,id:12},
				{name:'探春',age:13,id:6},
			]
		}
	}
	delById(id) {//接收到要被删除的对象的id
		let l = this.state.list;
		for(let i=0; i<l.length; i++) {
			if(l[i].id==id) {
				l.splice(i, 1);
			}
		}
		this.setState({list:l})
	}
	list() {
		const listItems = this.state.list.map((item)=>{
			return <tr key={item.id} ><td>{item.name}</td><td>{item.age}</td><td>{item.id}</td><td>
			<button onClick={this.delById.bind(this,item.id)}>删除</button></td></tr>
		});
		return listItems;
	}
	render() {
		return (
			<div>
				<table border="1" cellspacing="0" cellpadding="2">
					<tr><th>name</th><th>age</th><th>id</th><th>删除</th></tr>
					{this.list()}
				</table>
			</div>
		);
	}
}