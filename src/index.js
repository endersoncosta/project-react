import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App2 from './App2';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
