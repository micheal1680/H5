import React from 'react';

class TextView extends React.Component {
	constructor() {
	    super();
	}
	getInf() {
		let list = this.props.content;
		if(typeof list == "string") {
			return  <p>{this.props.content}</p>;
		}else {
			let liStu = list.map((stu)=>{
				return <li>{stu.id},{stu.name},{stu.age}</li>
			});
			return liStu;
		}
	}
	render() {
		return (
			<div>
				{this.getInf()}
			</div>
		);
	}
}

export default TextView;
