import React from 'react'; //导入react库 //固定
import ReactDOM from 'react-dom'; //导入react-dom库 //固定
import App from './App';//导入App.js //固定

import * as serviceWorker from './serviceWorker';//导入serviceWorker.js  //固定
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();//固定

//public/index.html, 导入src/index.js
//App.js
