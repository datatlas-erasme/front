import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { enhanceReduxMiddleware, keplerGlReducer, uiStateUpdaters } from 'kepler.gl';
import thunk from 'redux-thunk';
import appReducer from './reducers/app-reducer';

declare global{
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// export type AppStore = {
//   keplerGl: any;
// };

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState: {
    readonly: true,
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
  visState: {},
  
})
.plugin({
  HIDE_AND_SHOW_SIDE_PANEL: (state : any, action: any) => ({
    ...state,
    uiState: {
      ...state.uiState,
      readOnly: !state.uiState.readOnly
    }
  })
});

console.log(customizedKeplerGlReducer);

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,
  app: appReducer
});

const middlewares = enhanceReduxMiddleware([thunk]);
const enhancers = [applyMiddleware(...middlewares)];
const initialState = {};

let composeEnhancers = compose;

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

export default createStore(reducers, initialState, composeEnhancers(...enhancers));