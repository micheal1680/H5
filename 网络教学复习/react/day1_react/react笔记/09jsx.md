01        React 在设计上的思路认为使用Component比起模版（Template）和显示逻辑（Display Logic）更能实现关注点分离的概念，而搭配 JSX 可以实现声明式 Declarative。

​       使用宣告式（Declarative）UI 设计很容易可以看出这个组件的功能。JSX是一种JavaScript的语法扩展。JSX用来声明 React 当中的元素 。





就是在文档中写的逻辑代码 

## 一，JavaScript 表达式

```
+、-、*、/、%
<button>按钮{1+1}</button>
```

## 二，三元运算

JSX 中不能使用 if else 语句，使用 conditional (三元运算) 表达式来替代 

```
 <h1>{index == 1 ? 'True!' : 'False'}</h1>
```

## 三，属性

在 HTML 中，我们可以透过标签上的属性来改变标签外观样式，在 JSX 中也可以，但要注意 class 和 for 由于为 JavaScript 保留关键字用法，因此在 JSX 中使用 className 和 htmlFor 替代。 

```
 <h1 className="title">{index == 1 ? 'True!' : 'False'}</h1>
```

## 四，Boolean属性

JSX中预设只有属性名称但没设值为 true 

```
<input type="button" value="按钮" disabled/>
<input type="button" value="按钮" disabled={false} />
```

## 五，自定义属性

若是希望使用自定义属性，可以使用 data-： 

```
<HelloMessage data-attr="xd" />
```

## 六，样式使用

​        在 JSX 中使用外观样式方法如下，最外层的{}的是JSX语法，第层的{}为 JavaScript 对象。 

```js
<HelloMessage style={{ color: '#FFFFFF', fontSize: '30px'}} />
说明 font-size要写成fontSize， 即要写成小驼峰法
```

```js
export default class MyJsx extends React.Component {
  constructor() {
	  super();
      this.mystyle = {backgroundColor: '#00ffff', fontSize: '40px'};
  }
  render() {
    return (
      <button className='mybtn'  style={this.mystyle}>
        点我
      </button>
    );
  }
}
```

## 七，事件处理

![1573992147782](img\1573992147782.png)



在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后还可以根据应用的状态变化只渲染其中的一部分。

## 八，条件渲染

```
        if(this.state.isShow)
            return <h1> 显示数据</h1>
        else
            return <h1> 不显示数据</h1>
```

## 九，列表渲染

使用 map() 方法遍历数组

```
 List(){
        const listItems = this.state.list.map((item) =>{
                return <li>姓名是{item.name};年龄是{item.age}.</li>
        }
        );
        return listItems
    }
```

显示数据

```
  render() {

        return <div>
            <ul> {this.List()}</ul>
        </div>;

    }
```

## 十，列表设置key值

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串

```
const listItems = this.state.list.map((item) =>{
          return <li key={item.id}>姓名是{item.name};年龄是{item.age}.</li>
});
```
