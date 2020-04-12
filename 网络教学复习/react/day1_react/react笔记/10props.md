## 一、引例:

```js
//TextView.js
import React from "react";
export default class TextView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.name
    };
  }

  render() {
    return (
      <div>
        <h1> {this.props.name} </h1>
      </div>
    );
  }
}

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
```

##                                                                                                                  二，Props

state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

##### (0)带属性的组件构造函数要写为

```js
constructor(props) {
    super(props);
    ....
}
```

##### (1)设置数据

```
<TextView title={value}/>
```

##### (2)Props获得数据

```js
 构造函数中获取
constructor(props) {
    super(props);
    this.state = {
      	//构造函数中获取属性值
      	title: props.title
};
 元素中获取
 <h1>TextView{this.props.title}</h1>
    或
 <h1>TextView{this.state.title}</h1>
```

## 三，回调机制

（1）在父组件创建方法

```
setAge(age){
        this.setState({age:age})
}
```

（2）把父组件的方法传递给子组件

```
 <IconView  setAge={this.setAge}></IconView>
```

（3）子组件保存父组件的方法

```
  this.setAge=props.setAge;
```

（4）子组件设置点击事件

```
 onClick={(this.changeAge).bind(this)}
```

（5）子组件被点击后调用父组件的方法

```
changeAge(){
        this.state.age++;
        this.setAge(this.state.age)
}
```