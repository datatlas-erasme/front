import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { processGeojson } from 'erasme-kepler.gl/processors';
import App from '../App';

export default function FetchInstanceConf() {
    const [dataLayers, setDataLayers] = useState([]);
  
    const [dataLoaded, setDataLoaded] = useState(false);
    const [mapUpdated, setMapUpdated] = useState(false);
  
    const [instanceConf, setInstanceConf] = useState({})
    const [instanceConfLoaded, setInstanceConfLoaded] = useState(false)
  
    const [keplerConf, setKeplerConf] = useState({})
    const [keplerConfLoaded, setKeplerConfLoaded] = useState(true)
  
    const dispatch = useDispatch();
  
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
  
     // Retreive Kepler configuration
     useEffect(() => {
      console.log("FETCH DATA" + backendUrl + "/api/conf/kepler")
      fetch(backendUrl + "/api/conf/kepler", { method: "GET" })
          .then((res) => res.json())
          .then((data) => {
            setKeplerConf(data)
            setKeplerConfLoaded(true)
          });
      
    }, []);
      
    // Get instance config / fetch data and store into DataLayers
    useEffect(() => {
      if(instanceConfLoaded) {
        const buffer = [];
        const promises = instanceConf.layers.map(async(layer) => {
  
          return fetch(layer.url)
            .then((res) => res.json())
            .then((data) => {
              if (data.fields) {
                buffer.push([layer.name, data]);
              } else {
                buffer.push([layer.name, processGeojson(data)]);
                buffer.push()
              }
            });
        });
        Promise.all(promises).then(() => {
          setDataLayers(buffer);
          setDataLoaded(true);
          // console.log('BUFFER', buffer);
        });
      }
      
    }, [instanceConf, instanceConfLoaded]);

    if (instanceConfLoaded && dataLayers) {
      // console.log("Data Layers", dataLayers);

      return (<App instance={{conf : instanceConf, datalayers: dataLayers, keplerConf: keplerConf }}/>)
    }
    else {
      return (<div>Loading...</div>)
    }
   
}