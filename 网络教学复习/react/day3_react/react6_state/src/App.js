import React from 'react';
//1.调用函数   <button onClick={this.change.bind(this,"性别女")}>
//2.表示状态的属性名字只能是state
//3.改变state属性的值要因该使用从父类Componet中继承下来的setState(...)来修改
//4.只要调用setState来修改属性state的值,就会触发render重新执行
export default class List extends React.Component {
  constructor() {
    super();
    //保存数据, state这个属性的名字，不能改成其它名字
    this.state = {                       
					title: "你好",
					name:"小明",
			     };
  }
  change(obj) {
    //设置数据, setState专门修改名字为state的成员的值
    this.setState({title: "我很好", age:100});
  }
  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>
		<h1> {this.state.name} </h1>
		<h1> age={this.state.age} </h1>
        <button onClick={this.change.bind(this,"性别女")}> 点击按钮 </button>
      </div>
    );
  }
}
