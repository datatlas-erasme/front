import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enhanceReduxMiddleware } from 'erasme-kepler.gl';
import { taskMiddleware } from 'react-palm/tasks';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import keplerGlReducer from './keplerGl';
import appReducer from './app';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {};
const reducers = combineReducers({
  keplerGl: keplerGlReducer,
  app: appReducer,
});

const middlewares = enhanceReduxMiddleware([thunk, taskMiddleware]);
const enhancers = [applyMiddleware(...middlewares)];

// Add redux devtools

const composeEnhancers = composeWithDevTools({
  actionsBlacklist: ['@@kepler.gl/MOUSE_MOVE', '@@kepler.gl/UPDATE_MAP', '@@kepler.gl/LAYER_HOVER'],
});
/**
 * comment out code below to enable Redux Devtools
 */
// if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     actionsBlacklist: [
//       '@@kepler.gl/MOUSE_MOVE',
//       '@@kepler.gl/UPDATE_MAP',
//       '@@kepler.gl/LAYER_HOVER',
//     ],
//   });
// }

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default createStore(reducers, initialState, composeEnhancers(...enhancers));
