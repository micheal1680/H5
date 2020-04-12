## 1.public下css文件

public下index.html中要以引用public下的css文件和图片

![1573556945081](img\1573556945081.png)

## 2.组件文件的css和图片

在src下面创建的css，可以被组件导入，对组件生效

```css
<!--src/index.css-->
div>h1 {
	background: #999999;
	width: 250px;
}
div>h1:hover {
	background: #888888;
	cursor: pointer;
}
div>h1:active {
	background: #777777;
}
```



```js
//Widget.js
import React from 'react';
import "./index.css"
class Widget extends React.Component {
  render() {
    return (
      <div>
            <h1> 我是第二个组件 </h1>
			<h1> 我是第二个组件 </h1>
			<h1> 我是第二个组件 </h1>
      </div>
    );
  }
}
export default Widget;
```

![1573558978794](img\1573558978794.png)





















