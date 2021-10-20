import React, {useEffect, useState} from "react";
import keplerGlReducer, {visStateReducer} from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch, connect } from "react-redux";
import { addDataToMap, updateMap, toggleModal, wrapTo, layerConfigChange } from "kepler.gl/actions";
import { composeWithDevTools } from 'redux-devtools-extension';
import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
import  {MapPopoverFactory,LayerHoverInfoFactory,injectComponents} from 'kepler.gl/components';
import CustomMapPopoverFactory from './factories/map-popover';
import CustomLayerHoverInfo from './factories/CustomLayerHoverInfo';
import { replaceLayerHoverInfo } from "./factories/layer-hover-info"
//import store from "./store"

import helpers from "./helpers/main";
import mapConfig from './static/defaultDisplayConf.json';


////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import Crowdsourcing from './components/Crowdsourcing';
import Logo from './components/Logo'
import FilterSidePanel from './components/FilterSidePanel'


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



//const store = createStore(reducers, {},  composeEnhancers(...enhancers));

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));


//const store = createStore(reducers, {},  composeEnhancers(...enhancers));

//const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));
//const store = createStore(reducers, {}, composeWithDevTools())
const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});




function Map() {

    const [mediationData, setMediationData] = useState([]);
    const [tigaData, setTigaData] = useState([]);
    const [otherData, setOtherData] = useState([]);
    
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
  
          // Fetch Tiga Notion Data
          helpers.formatData("https://download.data.grandlyon.com/wfs/grandlyon?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=eco_ecologie.ecoannuproducteur_latest&outputFormat=application/json; subtype=geojson&SRSNAME=EPSG:4171&startIndex=0", "openDataLyon").then((data) => {
              setOtherData(data)
          })
  
          setDataLoaded(true)
    }, [])

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
                  data: otherData
              },
            ],
            option: {
              centerMap: false
            },
            config: mapConfig
          })
        );
  
  dispatch(updateMap({"latitude": 45.764043,"longitude": 4.835659, "zoom" : 12}))
  //dispatch(wrapTo("1",layerConfigChange({isVisible: false})))
  setMapUpdated(true);
      }


    }, [dispatch,mediationData, tigaData, otherData, setMapUpdated]);

    return (
        mapUpdated ? (
        <div>
            <KeplerGl
                id="map"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
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