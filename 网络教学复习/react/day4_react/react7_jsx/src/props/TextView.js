//TextView.js
import React from "react";
export default class TextView extends React.Component {
  constructor(props) {
    super(props);
	console.log("TextView")
  }

  render() {
	  console.log("render....")
    return (
      <div>
        <h1> {this.props.name} </h1>
      </div>
    );
  }
}