import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
//import store from './store';

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

// Injects the new styling into the components
const reducers = combineReducers({
    keplerGl: keplerGlReducer
  });
  

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

window.React = React
render(
    <Provider store={store}>
    <HashRouter>
        <Switch>
        <div className="main">
            <Route exact path="/" component={App} />
            <Route path="/admin" component={AdminPage} />
        </div>
        </Switch>
    </HashRouter>
    </Provider>,
    document.getElementById('root')
)