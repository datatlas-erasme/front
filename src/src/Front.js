import React, { useEffect, useState } from 'react';
////////////////////////// REDUX IMPORT /////////////////////////////////////////
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import ProgressBar from "@ramonak/react-progress-bar";
////////////////////////// KEPLER.GL IMPORT /////////////////////////////////////////
import keplerGlReducer from 'erasme-kepler.gl/reducers';
import { addDataToMap, updateMap, addCustomMapStyle, layerConfigChange, inputMapStyle } from 'erasme-kepler.gl/actions';
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
  const [dataLayersUpdated, setDataLayersUpdated] = useState(false);

  const [dataLoaded, setDataLoaded] = useState(false);
  const [mapUpdated, setMapUpdated] = useState(false);

  const [progressBar, setProgressBar] = useState(0);
  const [progressMsg, setProgressMsg] = useState("");

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
          setProgressMsg("Récuperation des calques")
          setProgressBar(15)
          setInstanceConf(data)
          setInstanceConfLoaded(true)
        }); 
    fetch(backendUrl + "/api/conf/kepler")
        .then((res) => res.json())
        .then((data) => {
          setProgressMsg("Récuperation des styles")
          setProgressBar(25)
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
            setProgressMsg("Traittement des calques")
            setProgressBar(70)
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
        setMapUpdated(true);
        //console.log('BUFFER', buffer);
      });
    }
      setProgressBar(70)
  }, [instanceConf, instanceConfLoaded, mapUpdated]);

  // Get DataLayers and add data to map
  useEffect(() => {
    dispatch(addDataToMap({ datasets: [], option: { centerMap: true }, config: keplerConf }));
    if (dataLayers) {
      setProgressMsg("Ajout des calques à la carte")
      dataLayers.map((dataset, index) => {
        setProgressMsg("Ajout du calque " + dataset[0])
        dispatch(
          addDataToMap({
            datasets: [
              {
                info: {
                  label: dataset[0],
                  id: dataset[0],
                },
                data: dataset[1]
              },
            ],
          })
        );
        
      });
    }
    //dispatch(layerConfigChange(keplerConf.visState?.layers['a262y1v'], { isVisible: false }));
    setDataLayersUpdated(true);
    //setMapUpdated(true);
    setProgressBar(90)

  }, [dispatch, dataLoaded, dataLayers, keplerConfLoaded, keplerConf, mapUpdated]);

  // Pass the default kepler styling
  useEffect(() => {
    if(keplerConfLoaded && instanceConf && dataLayersUpdated) {
      setProgressMsg("Ajout des styles à la carte")
      //dispatch(addDataToMap({ datasets: [], option: { centerMap: false }, config: keplerConf }));
      // Load à custum map style from backend
      setProgressMsg("Ajout du theme de carte")
      dispatch(inputMapStyle({style: instanceConf.defaultMapBoxStyleUrl, id:"monochrome", name:"Monochrome"}))
      dispatch(inputMapStyle({name:"muted"}))

      dispatch(addCustomMapStyle())
      
    }
    setProgressBar(20)
  }, [dispatch, keplerConfLoaded, keplerConf, instanceConf, mapUpdated, dataLayersUpdated]);

  return mapUpdated & keplerConfLoaded ? (
    <div>
      <KeplerGl
        id="map"
        mapboxApiAccessToken={instanceConf.mapboxToken}
        width={window.innerWidth}
        height={window.innerHeight}
        appName="Datatlas"
      />
      <CursorHandler/>
      <FilterSidePanel />   
    </div>
    ) : (
      <div className='loading-map'>
        <div>
          <h1>CHARGEMENT DE LA CARTE</h1>
          {progressMsg}
          <ProgressBar bgColor="#2AE685" completed={progressBar} />
        </div>
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
