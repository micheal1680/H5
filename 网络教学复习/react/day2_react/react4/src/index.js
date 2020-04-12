import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from "./views/view1/Home/Home.js";
ReactDOM.render(<Home />, document.getElementById('root'));
serviceWorker.unregister();
