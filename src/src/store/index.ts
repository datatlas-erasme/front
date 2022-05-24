import { createStore, combineReducers, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enhanceReduxMiddleware, keplerGlReducer, uiStateUpdaters, layerTypeChangeUpdater } from 'erasme-kepler.gl';
import { taskMiddleware } from 'react-palm/tasks';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from './reducer';

declare global{
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState: {
    // hide side panel when mounted
    activeSidePanel: null,
    // hide all modals when mounted
    currentModal: null,

    mapControls: {
      ...uiStateUpdaters.DEFAULT_MAP_CONTROLS,
      visibleLayers: {
        show: false
      },
      mapLegend: {
        show: false,
        active: false
      },
      toggle3d: {
        show: false
      },
      splitMap: {
        show: false
      }
    }
  },
  },)

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,
  app: appReducer
});

const middlewares = enhanceReduxMiddleware([thunk, taskMiddleware]);
const enhancers = [applyMiddleware(...middlewares)];

const initialState = {};

// Add redux devtools

const composeEnhancers = composeWithDevTools({
    actionsBlacklist: [
      '@@kepler.gl/MOUSE_MOVE',
      '@@kepler.gl/UPDATE_MAP',
      '@@kepler.gl/LAYER_HOVER',
  ]});
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

export default createStore(
  reducers, 
  initialState, 
  composeEnhancers(...enhancers)
  );