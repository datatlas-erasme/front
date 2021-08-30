import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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


////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import {AdminPage} from "./components/AdminPage";



const customizedKeplerGlReducer = keplerGlReducer.initialState({
    uiState: {
      // hide side panel when mounted
      activeSidePanel: null,
      // hide all modals when mounted
      currentModal: null
    }
  });
  const middlewares = [taskMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const initialState = {};
  
  // eslint-disable-next-line prefer-const
  let composeEnhancers = compose;
  
  /**
   * comment out code below to enable Redux Devtools
   */
  
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsBlacklist: [
        '@@kepler.gl/MOUSE_MOVE',
        '@@kepler.gl/UPDATE_MAP',
        '@@kepler.gl/LAYER_HOVER'
      ]
    });
  }
  // Injects the new styling into the components
  const reducers = combineReducers({
      keplerGl: customizedKeplerGlReducer
    });
    
  
  const store = createStore(reducers, initialState, composeEnhancers(...enhancers));
  

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