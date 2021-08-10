import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from 'react-dom'
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'

import {
    About,
    Events,
    Products,
    Contact
} from './page_test_dev'

import {AdminPage} from "./components/AdminPage";

window.React = React
render(
    <HashRouter>
        <Switch>
        <div className="main">
            <Route exact path="/" component={App} />
            <Route path="/admin" component={AdminPage} />
        </div>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
)