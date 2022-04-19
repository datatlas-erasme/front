import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store from './store';
import FetchInstanceConf from './utils/FetchInstanceConf';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
          <Router>
            <FetchInstanceConf/>
          </Router>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
