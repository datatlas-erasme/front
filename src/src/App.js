import React, {useEffect, useState} from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import { addDataToMap, updateMap } from "kepler.gl/actions";
import { composeWithDevTools } from 'redux-devtools-extension';
import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
import  {MapPopoverFactory,injectComponents} from 'kepler.gl/components';
import CustomMapPopoverFactory from './factories/map-popover';

import helpers from "./helpers/main";
import mapConfig from './static/defaultDisplayConf.json';


////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import Crowdsourcing from './components/Crowdsourcing';
import Logo from './components/Logo'
import FilterSidePanel from './components/FilterSidePanel'

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState: {
    // hide side panel when mounted
    activeSidePanel: null,
    // hide all modals when mounted
    currentModal: null
  }
});


// Inject the point sidepanel component
const KeplerGl = injectComponents([
  [MapPopoverFactory, CustomMapPopoverFactory],
]);




const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer
});


const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



//const store = createStore(reducers, {},  composeEnhancers(...enhancers));

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));
//const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(taskMiddleware)));



export default function App() {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}

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

    }, []);

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
        }
        dispatch(updateMap({"latitude": 45.764043,"longitude": 4.835659, "zoom" : 12}))
        setMapUpdated(true);

    }, [dispatch,mediationData, tigaData, otherData]);

    return (
        mapUpdated ? (
        <div>
            <KeplerGl
                id="map"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <Logo/>
            <FilterSidePanel/>
            <Crowdsourcing/>
        </div>
    
        ) : ""

    );
}