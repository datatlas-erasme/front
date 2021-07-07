import React from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import useSwr from "swr";
import trees from './trees.json';
import tiga from './tiga.json';
import population from './population.json';

import config from './testconfig.json';




console.log(trees)
const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <Map />
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

  // Map trees
  React.useEffect(() => {

      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "Arbres alignements",
              id: "arbres_metropole"
            },
            data: trees
          },
          option: {
            centerMap: true,
            readOnly: false
          },
          config: {}
        })
      );
    
  }, [dispatch, data]);

  // Map TIGA
  React.useEffect(() => {

    dispatch(
      addDataToMap({
        datasets: {
          info: {
            title: "TEST",
            label: "Tiga",
            id: "tiga"
          },
          data: tiga
        },
        option: {
          centerMap: false,
          readOnly: false
        },
        config: {}
      })
    );
  
}, [dispatch, data]);

/*const configToSave = KeplerGlSchema.getConfigToSave(state.keplerGl.foo);
console.log(configToSave)*/

  return (
    <KeplerGl
      id="covid"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
