import React, { useEffect, useState } from 'react';
////////////////////////// REDUX IMPORT /////////////////////////////////////////
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, useDispatch } from 'react-redux';
////////////////////////// KEPLER.GL IMPORT /////////////////////////////////////////
import keplerGlReducer from 'erasme-kepler.gl/reducers';
import { addDataToMap } from 'erasme-kepler.gl/actions';
import { enhanceReduxMiddleware } from 'erasme-kepler.gl/middleware';
import { MapPopoverFactory, injectComponents } from 'erasme-kepler.gl/components';
import { processGeojson } from 'erasme-kepler.gl/processors';
import CustomMapPopoverFactory from './factories/map-popover';
////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import BottomRightSection from './components/BottomRightSection';
import Logo from './components/Logo';
import FilterSidePanel from './components/FilterSidePanel';
import ConfProvider from './providers/ConfProvider';
import InstanceConfig from './components/InstanceConfig';

//Todo Create env var for title
//document.title = instanceConf.siteTitle;

// Inject the point sidepanel component
const KeplerGl = injectComponents([[MapPopoverFactory, CustomMapPopoverFactory]]);

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

const store = createStore(reducers, initialState, composeEnhancers(...enhancers));

//const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

//const store = createStore(reducers, {}, composeWithDevTools())

function Map() {

  return (
    <div>
      <KeplerGl
        id="map"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        width={window.innerWidth}
        height={window.innerHeight}
        appName="Datatlas"
      />
      <Logo />
      <FilterSidePanel />
      <BottomRightSection />
      <InstanceConfig/>
    </div>
  )
}

function Back() {
  return (
    <ConfProvider>
      <Provider store={store}>
        <Map />
      </Provider>
    </ConfProvider>
  );
}

export default Back;
