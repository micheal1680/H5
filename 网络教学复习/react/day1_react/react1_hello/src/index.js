//第一种
// import React from 'react';
// import ReactDOM from 'react-dom';

// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<button>点我</button>, document.getElementById('root'));
// serviceWorker.unregister();

// //第二种
// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// function GetUI() {
// 	return (
// 		<div>
// 			<ul>
// 				<li>苏格拉底</li>
// 				<li>老子</li>
// 				<li>修莫</li>
// 				<li>亚里士多德</li>
// 			</ul>
// 			<p>
// 				都是哲学家
// 			</p>
// 		</div>
// 	);
// }
// // ReactDOM.render(GetUI(), document.getElementById('root'));
// ReactDOM.render(<GetUI /> ,document.getElementById('root'))
// serviceWorker.unregister();

// 第三种
// import React from 'react';//导入react.js中的React
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// //继承了类Componet,
// class Widget extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div>
//         <h1> 我是第二个组件 </h1>
// 		<h1> 我是第二个组件 </h1>
// 		<h1> 我是第二个组件 </h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Widget />, document.getElementById('root'));
// serviceWorker.unregister();

// 第四种
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

// 第五种, 实计开发中用得最多的一种 这是重点
import React from 'react';
import ReactDOM from 'react-dom';
import App5 from './App5';

import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App5 />, document.getElementById('root'));
serviceWorker.unregister();