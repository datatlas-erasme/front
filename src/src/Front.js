import React, { useEffect, useState } from 'react';
////////////////////////// REDUX IMPORT /////////////////////////////////////////
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, useDispatch } from 'react-redux';
////////////////////////// KEPLER.GL IMPORT /////////////////////////////////////////
import keplerGlReducer from 'erasme-kepler.gl/reducers';
import { addDataToMap, updateMap, addCustomMapStyle, loadCustomMapStyle, inputMapStyle } from 'erasme-kepler.gl/actions';
import { enhanceReduxMiddleware } from 'erasme-kepler.gl/middleware';
import { MapPopoverFactory, injectComponents } from 'erasme-kepler.gl/components';
import { processGeojson } from 'erasme-kepler.gl/processors';
import CustomMapPopoverFactory from './factories/map-popover';
////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import Logo from './components/Logo';
import FilterSidePanel from './components/FilterSidePanel';
import ConfProvider from './providers/ConfProvider';
import CursorHandler from './components/CursorHandler';
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
  const [dataLayers, setDataLayers] = useState([]);

  const [dataLoaded, setDataLoaded] = useState(false);
  const [mapUpdated, setMapUpdated] = useState(false);

  const [instanceConf, setInstanceConf] = useState({})
  const [instanceConfLoaded, setInstanceConfLoaded] = useState(false)

  const [keplerConf, setKeplerConf] = useState({})
  const [keplerConfLoaded, setKeplerConfLoaded] = useState(true)

  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
    console.log(isActive)
  };

  const dispatch = useDispatch();

  const backendUrl = process.env.REACT_APP_BACKEND_URL
  
  //TODO create helper to fetch conf ?

  // Retreive Instance configuration
  useEffect(() => {
    console.log("FETCH DATA" + backendUrl + "/api/conf/instance")
    fetch(backendUrl + "/api/conf/instance")
        .then((res) => res.json())
        .then((data) => {
          setInstanceConf(data)
          setInstanceConfLoaded(true)
        }); 
    fetch(backendUrl + "/api/conf/kepler")
        .then((res) => res.json())
        .then((data) => {
          setKeplerConf(data)
          setKeplerConfLoaded(true)
        }); 
  }, []);
  
  // Get instance config / fetch data and store into DataLayers
  useEffect(() => {
    if(instanceConfLoaded) {
      const buffer = [];
      const promises = instanceConf.layers.map((layer) => {
        //console.log(layer.type);
  
        return fetch(layer.url)
          .then((res) => res.json())
          .then((data) => {
            if (data.fields) {
              buffer.push([layer.name, data]);
            } else {
              buffer.push([layer.name, processGeojson(data)]);
            }
          });
      });
      Promise.all(promises).then(() => {
        setDataLayers(buffer);
        setDataLoaded(true);
        //console.log('BUFFER', buffer);
      });
    }
    
  }, [instanceConf, instanceConfLoaded]);

  // Get DataLayers and add data to map
  useEffect(() => {
    if (dataLayers) {
      dataLayers.map((dataset, index) => {
        dispatch(
          addDataToMap({
            datasets: [
              {
                info: {
                  label: dataset[0],
                  id: dataset[0],
                },
                data: dataset[1],
              },
            ],
          }),
        );
      });
    }
  }, [dispatch, dataLoaded, dataLayers, keplerConfLoaded, keplerConf]);

  // Pass the default kepler styling
  useEffect(() => {
    if(keplerConfLoaded && instanceConf){
      dispatch(addDataToMap({ datasets: [], option: { centerMap: false }, config: keplerConf }));
      // Load à custum map style from backend
      dispatch(inputMapStyle({style: instanceConf.defaultMapBoxStyleUrl, id:"monochrome", name:"Monochrome"}))
      dispatch(inputMapStyle({name:"muted"}))

      dispatch(addCustomMapStyle())
      setMapUpdated(true);
    }
  }, [dispatch, keplerConfLoaded, keplerConf, instanceConf]);

  return mapUpdated ? (
    <div>
      <KeplerGl
        id="map"
        mapboxApiAccessToken="pk.eyJ1IjoieXNpb3VkYSIsImEiOiJja3JnZ2k1cDg1cTMxMnJueGV6cDU4c25iIn0.td9NqwcqkUW1VeRIPB2oTA"
        width={window.innerWidth}
        height={window.innerHeight}
        appName="Datatlas"
      />
      <CursorHandler/>
      <FilterSidePanel />   
    </div>
    ) : (
      <div>
        <h1>CHARGEMENT DE LA CARTE</h1>
      </div>
    );
}

function Front() {
  return (
    <ConfProvider>
      <Provider store={store}>
        <Map />
      </Provider>
    </ConfProvider>
  );
}

export default Front;
