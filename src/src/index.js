import React from 'react';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import ReactDOM from 'react-dom';

import { composeWithDevTools } from 'redux-devtools-extension'

//import store from './store';

import { render } from 'react-dom'
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'




////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import {AdminPage} from "./components/AdminPage";



/*window.React = React
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
)*/

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );