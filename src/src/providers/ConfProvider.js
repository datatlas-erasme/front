import React from 'react';
import { useEffect, useState, useContext, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { 
  addDataToMap,
  updateMap, 
  addCustomMapStyle, 
  inputMapStyle 
} from 'erasme-kepler.gl/actions';
import { processGeojson } from 'erasme-kepler.gl/processors';

export const ConfContext = createContext();
export function FetchInstanceConf({children}) {
  const [dataLayers, setDataLayers] = useState([]);

  const [dataLoaded, setDataLoaded] = useState(false);
  const [mapUpdated, setMapUpdated] = useState(false);

  const [instanceConf, setInstanceConf] = useState({})
  const [instanceConfLoaded, setInstanceConfLoaded] = useState(false)

  const [keplerConf, setKeplerConf] = useState({})
  const [keplerConfLoaded, setKeplerConfLoaded] = useState(true)

  const backendUrl = process.env.REACT_APP_BACKEND_URL
  // Retreive Instance configuration
  useEffect(() => {
    console.log("FETCH DATA" + backendUrl + "/api/conf/instance")
      fetch(backendUrl + "/api/conf/instance", { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          setInstanceConf(data)
          setInstanceConfLoaded(true)
        });  
  }, []);

    //return { datalayers: dataLayers, keplerConf: keplerConf }
    return <FetchInstanceConf.Provider value={{instanceConf}}> HELLO {children} </FetchInstanceConf.Provider>
    //return (<App instance={{conf : instanceConf, datalayers: dataLayers, keplerConf: keplerConf }}/>)

}

export function useAPI() {
  const context = useContext(FetchInstanceConf);

  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }

  return context;
}