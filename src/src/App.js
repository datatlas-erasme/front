import React from "react";

// Imports custom component styling
import './index.css';

import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
//import KeplerGl from "kepler.gl";
import KeplerGlSchema from 'kepler.gl/schemas';
import { addDataToMap , updateMap } from "kepler.gl/actions";
//import {injectComponents, PanelHeaderFactory} from 'kepler.gl/components';
import useSwr from "swr";

// Add a contribute button
import Crowdsourcing from './components/Crowdsourcing';

import openDataLyon from "./helpers/openDataLyon";
import geoserver from "./helpers/geoserver";


//Import helpers
//import { getData} from "./helpers/openDataLyon";

// Loads json Data files (trees tiga population)
//import trees from './trees.json';
//import tiga from './static/datasets/tiga.json';
import population from './static/datasets/population.json';



// Loads the default display configuration
import config from './static/defaultDisplayConf.json';

import customTheme from './static/themeConf.json';


// Imports ThemeProvider who helps to change the css styling of the components
import {ThemeProvider} from 'styled-components';

// Injects new items into the panel Header
import {replacePanelHeader} from './factories/panel-header';

//import {replaceLoadDataModal} from './factories/load-data-modal';
const KeplerGl = require('kepler.gl/components').injectComponents([
  replacePanelHeader()
]);



// Injects the new styling into the components
const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <Map >
      </ Map>
    </Provider>
  );
}




// Geojson formating
function Map() {
  const dispatch = useDispatch();
  const { data } = useSwr("covid", async () => {
    const response = await fetch(
      "https://download.data.grandlyon.com/wfs/ldata?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=velov.stations&outputFormat=application/json;%20subtype=geojson&SRSNAME=EPSG:4171&startIndex=0&count=10"
    );
    const data = await response.json();
  });




  // Load Velov station from OpenDataLyon
  const { velo } = useSwr("velo", async () => {
    const velo = await openDataLyon.formatData("https://download.data.grandlyon.com/wfs/grandlyon?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=pvo_patrimoine_voirie.pvostationvelov&outputFormat=application/json; subtype=geojson&SRSNAME=EPSG:4171&startIndex=0&count=100")
    console.log(velo)
    dispatch(
      addDataToMap({
        datasets: {
          info: {
            label: "velo",
            id: "velo"
          },
          data: velo
        },
        option: {
          centerMap: true,
          readOnly: false,
          
        },
      })
    );
  });

  // Load Mediation BDD from geoserver
  const { mediation } = useSwr("mediation", async () => {
    const mediation = await geoserver.formatData("http://geoserver.ud-reproducibility.datagora.erasme.org/geoserver/erasme/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=erasme%3Amediation&maxFeatures=50&outputFormat=application%2Fjson")
    console.log(velo)
    dispatch(
      addDataToMap({
        datasets: {
          info: {
            label: "Mediation",
            id: "mediation"
          },
          data: mediation
        },
        option: {
          centerMap: true,
          readOnly: false,
          
        },
      })
    );
  });


  // Map Population
React.useEffect(() => {

  dispatch(
    addDataToMap({
      datasets: {
        info: {
          label: "Population",
          id: "pop"
        },
        data: population
      },
      option: {
        centerMap: true,
        readOnly: false,
        
      },
      // Confis has been disabled because it did note display the mediation data by default
      //config: config 
    })
  );

}, [dispatch, data]);


//config.config.visState.layers[1].config.isVisible = true

/*const configToSave = KeplerGlSchema.getConfigToSave(state.keplerGl.foo);
console.log(configToSave)*/


React.useEffect(() => {

  dispatch(
    updateMap({"latitude": 45.764043,"longitude": 4.835659, "zoom" : 12})
  );

}, [dispatch, data]);




  return (
    <ThemeProvider theme={customTheme}>
      <KeplerGl
        id="datatlas"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
        width={window.innerWidth}
        height={window.innerHeight}
        appName="DatAtlas"
        version="0.1"
      >
      </KeplerGl>
      <Crowdsourcing />
    </ThemeProvider>

  );
}
