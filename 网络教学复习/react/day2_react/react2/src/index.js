import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1.js';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App1 />, document.getElementById('root'));
serviceWorker.unregister();
