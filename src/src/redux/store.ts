import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { enhanceReduxMiddleware, keplerGlReducer } from 'kepler.gl';
// import window from 'global/window';
import appReducer from './app-reducer';

// export type AppStore = {
//   keplerGl: any;
// };

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState: {
    // hide side panel when mounted
    activeSidePanel: null,
    // hide all modals when mounted
    currentModal: null,
  },
});

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,
  app: appReducer
});

const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];
const initialState = {};

let composeEnhancers = compose;

/**
 * comment out code below to enable Redux Devtools
 */

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionsBlacklist: [
      '@@kepler.gl/MOUSE_MOVE',
      '@@kepler.gl/UPDATE_MAP',
      '@@kepler.gl/LAYER_HOVER',
    ],
  });
}

export default createStore(reducers, initialState, composeEnhancers(...enhancers));