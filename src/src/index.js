import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from 'react-dom'
import {
    HashRouter,
    Route
} from 'react-router-dom'

import {
    About,
    Events,
    Products,
    Contact
} from './page_test_dev'

window.React = React
render(
    <HashRouter>
        <div className="main">
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
        </div>
    </HashRouter>,
    document.getElementById('root')
)