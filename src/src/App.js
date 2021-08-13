import React from "react";

// Imports custom component styling
import './index.css';


// Imports Kepler.gl
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGlSchema from 'kepler.gl/schemas';
import { addDataToMap , updateMap } from "kepler.gl/actions";


import useSwr from "swr";

////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import Filters from './components/Filters';
import Crowdsourcing from './components/Crowdsourcing';

////////////////////////// HELPERS IMPORT /////////////////////////////////////////
import helpers from "./helpers/main";



////////////////////////// COMPONENT INJECTION ////////////////////////////////////
// Imports ThemeProvider who helps to change the css styling of the components
import {ThemeProvider} from 'styled-components';

// Injects new items into the panel Header
import {replacePanelHeader} from './factories/panel-header';


// Imports static datasets
import population from './static/datasets/population.json';



////////////////////////// CONFIG FILES IMPORT ////////////////////////////////////
import mapConfig from './static/defaultDisplayConf.json';
import customTheme from './static/themeConf.json';
import instanceConf from './static/instanceConf.json';


//Injects new panelHeader Component
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
  const { data } = useSwr("data", async () => {
    const response = await fetch(
      "https://download.data.grandlyon.com/wfs/ldata?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=velov.stations&outputFormat=application/json;%20subtype=geojson&SRSNAME=EPSG:4171&startIndex=0&count=10"
    );
    const data = await response.json();
  });

  console.log(instanceConf.layersDataUrl)

  const { layer1 } = useSwr("layer1", async () => {
    const layer1 = await openDataLyon.formatData(instanceConf.layers.layer1.url)
    console.log(layer1)
    dispatch(
      addDataToMap({
        datasets: {
          info: {
            label: instanceConf.layers.layer1.name,
            id: "1"
          },
          data: layer1
        },
        option: {
          centerMap: true,
          readOnly: false,
          
        },
      })
    );
  });

  const { layer2 } = useSwr("layer2", async () => {
    //TODO change helper method based on server type
    const layer2 = await openDataLyon.formatData(instanceConf.layers.layer2.url)
    console.log(layer2)
    dispatch(
      addDataToMap({
        datasets: {
          info: {
            label: instanceConf.layers.layer2.name,
            id: "2"
          },
          data: layer2
        },
        option: {
          centerMap: true,
          readOnly: false,
          
        },
      })
    );
  });



  // Load Velov station from OpenDataLyon
  /*const { velo } = useSwr("velo", async () => {
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
  });*/

  // Load Mediation BDD from geoserver
  /*const { mediation } = useSwr("mediation", async () => {
    const mediation = await geoserver.formatData("http://geoserver.ud-reproducibility.datagora.erasme.org/geoserver/erasme/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=erasme%3Amediation&maxFeatures=50&outputFormat=application%2Fjson")
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
  });*/

  


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
      <Filters title='Structures médiation' />
      <Crowdsourcing />
    </ThemeProvider>

  );
}