import React from "react";

// Imports custom component styling
import './index.css';

import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
//import KeplerGl from "kepler.gl";
import KeplerGlSchema from 'kepler.gl/schemas';
import { addDataToMap } from "kepler.gl/actions";
//import {injectComponents, PanelHeaderFactory} from 'kepler.gl/components';
import useSwr from "swr";

// Add a contribute button
import Crowdsourcing from './components/Crowdsourcing';

// Loads json Data files (trees tiga population)
//import trees from './trees.json';
import tiga from './tiga.json';
import population from './population.json';
import mediation from './mediation.json';


// Loads the default display configuration
import config from './testconfig.json';

// Imports ThemeProvider who helps to change the css styling of the components
import {ThemeProvider} from 'styled-components';

// Injects new items into the panel Header
import {replacePanelHeader} from './factories/panel-header';
const KeplerGl = require('kepler.gl/components').injectComponents([
  replacePanelHeader()
]);




// Injects the new styling into the components
//const white = '#ffffff';
const customTheme = {
  textColor: "white",
  sidePanelBg: '#d91f16',
  titleTextColor: '#000000',
  sidePanelHeaderBg: 'black',
  subtextColorActive: '#2473bd'
};

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

function Map() {
  const dispatch = useDispatch();
  const { data } = useSwr("covid", async () => {
    const response = await fetch(
      "https://download.data.grandlyon.com/wfs/grandlyon?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=abr_arbres_alignement.abrarbre&outputFormat=application/json; subtype=geojson&SRSNAME=EPSG:4171&startIndex=0"
    );
    const data = await response.json();

    return data;
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
        readOnly: false
      },
      config: config
    })
  );

}, [dispatch, data]);


  // Map Mediation
  React.useEffect(() => {

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
          centerMap: false,
          readOnly: false
        },
      })
    );
  
  }, [dispatch, data]);



/*const configToSave = KeplerGlSchema.getConfigToSave(state.keplerGl.foo);
console.log(configToSave)*/

  return (
    <ThemeProvider theme={customTheme}>
      <KeplerGl
        id="covid"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
        width={window.innerWidth}
        height={window.innerHeight}
      >
      </KeplerGl>
      <Crowdsourcing />
    </ThemeProvider>

  );
}
