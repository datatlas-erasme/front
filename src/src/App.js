import React, {useEffect, useState} from "react";

////////////////////////// REDUX IMPORT /////////////////////////////////////////
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

////////////////////////// KEPLER.GL IMPORT /////////////////////////////////////////
import keplerGlReducer from "kepler.gl/reducers";
import {addDataToMap, updateMap} from "kepler.gl/actions";

import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
import  {MapPopoverFactory,LayerHoverInfoFactory,injectComponents} from 'kepler.gl/components';
import {processGeojson} from 'kepler.gl/processors';


import mapConfig from './static/defaultDisplayConf.json';
import instanceConf from './static/instanceConf.json'
import CustomMapPopoverFactory from './factories/map-popover';

////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import BottomRightSection from './components/BottomRightSection';
import Logo from './components/Logo'
import FilterSidePanel from './components/FilterSidePanel'


import ConfProvider from './providers/ConfProvider'


import insertionEmploi from './static/datasets/ins_insertion_emploi.commissionlocale.json'


document.title = instanceConf.siteTitle

// Inject the point sidepanel component
const KeplerGl = injectComponents([
  [MapPopoverFactory, CustomMapPopoverFactory],
]);



const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState: {
    // hide side panel when mounted
    activeSidePanel: null,
    // hide all modals when mounted
    currentModal: null
  }
});


const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer
});

const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];
const initialState = {}

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

const store = createStore(reducers, initialState, composeEnhancers(...enhancers))


//const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

//const store = createStore(reducers, {}, composeWithDevTools())




function Map() {

    const [dataLayers, setDataLayers] = useState([]);
    
    const [dataLoaded, setDataLoaded] = useState(false);
    const [mapUpdated, setMapUpdated] = useState(false);

    const dispatch = useDispatch();


    // Get instance config / fetch data and store into DataLayers
    useEffect(() => {
      const buffer = []
      const promises = instanceConf.layers.map((layer) => {
        console.log(layer.type)
        return fetch(layer.url)
                .then(res => res.json())
                .then(
                (data) => {
                  if (data.fields) {
                    
                    buffer.push([layer.name, data])
                  }
                  else {
                    buffer.push([layer.name, processGeojson(data)])
                  }
                }) 
      })
      Promise.all(promises).then(()=> {
        setDataLayers(buffer)
        setDataLoaded(true)
        console.log("BUFFER", buffer)
      })
      
    }, [])


    // Get DataLayers and add data to map
    useEffect(() => {  
          dataLayers.map((dataset, index) => {
            console.log(dataset)
            dispatch(
              addDataToMap({
                datasets: [
                  {
                    info: {
                      label: dataset[0],
                      id: dataset[0]
                    },
                    data: dataset[1]
                  },
                ],
              })
            )
          })
          setMapUpdated(true)
        

    }, [dispatch, dataLoaded ])


    // Pass the default kepler styling
    useEffect(() => {
      dispatch(addDataToMap({ datasets: [],option: {centerMap: true},config:mapConfig}))
    }, [mapUpdated])



    return (
        mapUpdated ? (
        <div>
            <KeplerGl
                id="map"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                width={window.innerWidth}
                height={window.innerHeight}
                appName="Datatlas"
            />
            <Logo/>
            <FilterSidePanel/>
            <BottomRightSection/>
        </div>
    
        ) : ""

    );
}

function App() {
  return (
    <ConfProvider>
      <Provider store={store}>
        <Map />
      </Provider>
    </ConfProvider>
  );
}

export default App;