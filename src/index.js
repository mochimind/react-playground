import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import InputPanel from './containers/InputPanel';

ReactDOM.render(<InputPanel />, document.getElementById('root'));
registerServiceWorker();
