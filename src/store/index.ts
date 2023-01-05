import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enhanceReduxMiddleware } from 'kepler.gl';
import { taskMiddleware } from 'react-palm/tasks';
import thunk from 'redux-thunk';
import keplerGlReducer from './keplerGl';
import appReducer from './app';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {};
const rootReducer = combineReducers({
  keplerGl: keplerGlReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares = enhanceReduxMiddleware([thunk, taskMiddleware]);

const actionsBlacklist = [
  '@@kepler.gl/MOUSE_MOVE',
  '@@kepler.gl/UPDATE_MAP',
  '@@kepler.gl/LAYER_HOVER',
];

const composeEnhancers = composeWithDevTools({
  actionsBlacklist: [
    '@@kepler.gl/MOUSE_MOVE',
    '@@kepler.gl/UPDATE_MAP',
    '@@kepler.gl/SET_FILTER',
    '@@kepler.gl/LAYER_HOVER',
  ],
});

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require(`redux-logger`);

  middlewares.push(
    createLogger({
      predicate: (getState, { type }) => !actionsBlacklist.includes(type),
      collapsed: (getState, action, { error }) => !error,
    }),
  );
}

const enhancers = [applyMiddleware(...middlewares)];

export default createStore(rootReducer, initialState, composeEnhancers(...enhancers));
