## 一 ReactJS 特性简介

React 原本是 Facebook自己内部使用的开发工具。自从 2013 年开源后周边的生态系更是蓬勃发展。ReactJS的出现让前端开发有许多革新性的思维出现，其中有几个重要特性值得我们去探讨：

1. 基于组件（Component）化思考
2. 用 JSX 进行宣告式（Declarative）UI 设计
3. 使用 Virtual DOM
4. Component PropType 防呆机制
5. Component 就像个状态机（State Machine），而且也有生命周期（Life Cycle）
6. 一律重绘（Always Redraw）和单向资料流（Unidirectional Data Flow）
7. 在 JavaScript 里写 CSS：Inline Style



## 二 基于组件化思考

​        在 React 的世界中最基本的单元为组件（Component），每个组件也可以包含一个以上的子组件，并依照需求组装成一个组合式的（Composable）组件，因此具有封装（encapsulation）、关注点分离 (Separation of Concerns)、复用 (Reuse) 、组合 (Compose) 等特性。

​        组件化一直是网页前端开发的圣杯，许多开发者最希望的就是可以最大化重复使用（reuse）过去所写的程式码，不要重复造轮子（DRY）。在 React 中组件是一切的基础，让开发应用程式就好像在堆积木一样。然而对于过去习惯模版式（template）开发的前端工程师来说，短时间要转换成组件化思考模式并不容易，尤其过去我们往往习惯于将 HTML、CSS 和 JavaScript 分离，现在却要把它们都封装在一起。

