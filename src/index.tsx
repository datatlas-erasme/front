import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store from './store';
import App from './App';
import Loader from './components/Loader';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
