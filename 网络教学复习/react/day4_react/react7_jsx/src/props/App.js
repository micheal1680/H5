//App.js
import React from "react";
import TextView from "./TextView";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "你好"
    };
  }

  change() {
    this.setState({ title: "我很好！" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TextView name={this.state.title} />
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
    );
  }
}