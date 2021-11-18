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

    const [mediationData, setMediationData] = useState([]);
    const [tigaData, setTigaData] = useState([]);
    const [otherData, setOtherData] = useState([]);
    //const [insertionEmploi, setInsertionEmploi] = useState([]);

    
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
                    buffer.push(data)
                }) 
      })
      Promise.all(promises).then(()=> {
        setDataLayers(buffer)
        setDataLoaded(true)
      })
      
  
      //console.log(buffer)
    }, [])

    //console.log(dataLayers)

    // Get DataLayers and add data to map
   
    /*useEffect(() => {
      const datasets = []
      console.log("HOFFHER")
      
      
        console.log("DATA LOADED :D")
        dataLayers.map((layer) => {
          if(layer.fields) {
            datasets.push(layer)
          }
          else {
            datasets.push(processGeojson(layer))
          }
          //console.log(layer)
          

        })
        console.log("DATASETS", datasets)

        datasets.map((dataset) => {
          console.log(dataset)
          dispatch(
            addDataToMap({
              datasets: [
                {
                  info: {
                    label: 'test',
                    id: "1"
                  },
                  data: dataset
                }
              ]
            })
          )
        })

      
    }, [dispatch])*/


    

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