import React, {useEffect, useState} from "react";
import { taskMiddleware } from "react-palm/tasks";

////////////////////////// REDUX IMPORT /////////////////////////////////////////
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider, useDispatch, connect } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

////////////////////////// KEPLER.GL IMPORT /////////////////////////////////////////
import keplerGlReducer from "kepler.gl/reducers";
import { addDataToMap, updateMap, toggleModal, wrapTo, layerConfigChange } from "kepler.gl/actions";

import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
import  {MapPopoverFactory,LayerHoverInfoFactory,injectComponents} from 'kepler.gl/components';
import {processGeojson} from 'kepler.gl/processors';


import mapConfig from './static/defaultDisplayConf.json';
import CustomMapPopoverFactory from './factories/map-popover';

////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import Crowdsourcing from './components/Crowdsourcing';
import Logo from './components/Logo'
import FilterSidePanel from './components/FilterSidePanel'


import insertionEmploi from './static/datasets/ins_insertion_emploi.commissionlocale.json'

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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

//const store = createStore(reducers, {}, composeWithDevTools())


function Map() {

    const [mediationData, setMediationData] = useState([]);
    const [tigaData, setTigaData] = useState([]);
    const [otherData, setOtherData] = useState([]);
    //const [insertionEmploi, setInsertionEmploi] = useState([]);

    
    const [dataLoaded, setDataLoaded] = useState(false);
    const [mapUpdated, setMapUpdated] = useState(false);





    const dispatch = useDispatch();
    
    useEffect(() => {
      
          // Fetch Event Notion Data
          fetch('https://back-datatlas.datagora.erasme.org/api/data/notion/notion_mediation/')
          .then(res => res.json())
          .then(
          (data) => {
              setMediationData(data)
          })
  
           // Fetch Tiga Notion Data
           fetch('https://back-datatlas.datagora.erasme.org/api/data/notion/notion_tiga/')
           .then(res => res.json())
           .then(
           (data) => {
              setTigaData(data)
           })
  
          // Fetch OpenDataLyon Data

          fetch('https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=eco_economie.ecoagencepolemploi_latest&outputFormat=application/json; subtype=geojson&SRSNAME=EPSG:4171&startIndex=0')
          .then(res => res.json())
          .then(
          (data) => {
            setOtherData(data)
          })


          setDataLoaded(true)
    }, [])

    // Add Data Layers to map
    useEffect(() => {
      if (dataLoaded) {
        dispatch(
          addDataToMap({
            datasets: [
              {
                info: {
                  label: 'Event',
                  id: "3"
                },
                data: mediationData
              },
              {
                  info: {
                    label: 'Tiga',
                    id: '2'
                  },
                  data: tigaData
              },
              {
                  info: {
                    label: 'Annuaire',
                    id: '1'
                  },
                  data: processGeojson(otherData)
              },
              {
                info: {
                  label: 'Insertion Emploi',
                  id: '4'
                },
                data:  processGeojson(insertionEmploi)
            },
            ],
            option: {
              centerMap: false
            },
            config: mapConfig
          })
        );
  
      dispatch(updateMap({"latitude": 45.764043,"longitude": 4.835659, "zoom" : 12}))
      setMapUpdated(true);
      }
    }, [dispatch,mediationData, tigaData, otherData, setMapUpdated]);

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
            <Crowdsourcing/>
        </div>
    
        ) : ""

    );
}

function App() {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}

export default App;