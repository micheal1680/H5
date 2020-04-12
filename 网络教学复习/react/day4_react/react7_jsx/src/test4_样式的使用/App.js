/**
 *  学习动态的修改属性的值
 */
import React from 'react';
class Style2 {
	constructor() {
		this.backgroundColor="#ff0000";
		this.fontSize="30px";
	}
}
export default class App extends React.Component {
  constructor() {
	  super();
	  this.state = {
		  style1:{
			backgroundColor:"#ffff0f",
			fontSize:"30px",
		  },
		  style2:new Style2()
	  }
  }
  render() {
    return (
	  <div>
		  <button style={{color:"red", fontSize:"30px", backgroundColor:"pink"}}>
			  点我
		  </button>
		  <p style={this.state.style1}>
			 fsdafasd 
		  </p>
		  <p style={this.state.style2}>
		  			 fsdafasd 
		  </p>
	  </div>
    );
  }
}