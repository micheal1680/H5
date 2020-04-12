## 引例

```js
import React from "react";

export default class List extends React.Component {
  constructor() {
    super();
    //保存数据, state这个属性的名字，不能改成其它名字
    this.state = {                       
      title: "你好",
	  name:"小明"
    };
  }

  change() {
    //设置数据
    this.setState({ title: "我很好", name:'大人'});
	console.log(this.state.name);
  }
  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>
		<h1> {this.state.name} </h1>
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
    );
  }
}
```

onClick中的C一定要大写

### 一，State介绍

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

在 React Component 可以自己管理自己的内部 state，并用 this.state 来取 state。当 setState() 方法更新了 state 后将重新呼叫 render() 方法，重新绘制 component 内容。

### 二，设置State数据

```
构造函数中, state不能换成其它名字
this.state = {
     title:"你好",
     name:'小华'
}
```

### 三，获得State数据

```
render() {
   return (
      <div>
        <h1> {this.state.title} </h1>
    	<h1> {this.state.name} </h1>
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
   );
}
```

### 四，bind

bind() 方法与 apply 和 call很相似，也是可以改变函数体内 this 的指向。bind 是返回对应函数，便于稍后调用.

```
 <button onClick={(this.change).bind(this)}>点击按钮</button>
```

### 五，改变State数据

setState()方法用于更新组件的状态。 这种方法不会替代状态，而只是添加或对原始状态的更改。

```
change() {
    //设置数据
    this.setState({ title: "我很好", name:'大人'});
	console.log(this.state.name);
}
```

