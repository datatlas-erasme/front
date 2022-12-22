import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import keplerGlReducer from './kepler';
import appReducer from './app';

const rootReducer = combineReducers({
  keplerGl: keplerGlReducer,
  app: appReducer,
});

const composeEnhancers = composeWithDevTools({
  actionsBlacklist: [
    '@@kepler.gl/MOUSE_MOVE',
    '@@kepler.gl/UPDATE_MAP',
    '@@kepler.gl/SET_FILTER',
    '@@kepler.gl/LAYER_HOVER',
  ],
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: composeEnhancers,
});
// if (process.env.NODE_ENV === 'development') {
//   const { createLogger } = require(`redux-logger`);
//
//   middlewares.push(
//     createLogger({
//       predicate: (getState, { type }) => !actionsBlacklist.includes(type),
//       collapsed: (getState, action, { error }) => !error,
//     }),
//   );
// }
