import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  addDataToMap,
  updateMap, 
  addCustomMapStyle, 
  inputMapStyle 
} from 'erasme-kepler.gl/actions';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { processGeojson } from 'erasme-kepler.gl/processors';
import { 
  MapPopoverFactory, 
  injectComponents, 
} from 'erasme-kepler.gl/components';
import CustomMapPopoverFactory from '../../factories/map-popover';
import Logo from './Logo';

// import Logo from './Logo';

// Inject the point sidepanel component
const KeplerGl = injectComponents([
  [MapPopoverFactory, CustomMapPopoverFactory], 
]);

export default function MapContainer() {
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
          console.log(layer);
    
          return fetch(layer.url)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
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
        });
      }
      
    }, [instanceConf, instanceConfLoaded]);
  
    // Get DataLayers and add data to map
    useEffect(() => {
      if (dataLayers) {
        dataLayers.map((dataset, index) => {
          dispatch(
            addDataToMap({
              datasets: [
                {
                  info: {
                    label: dataset[0],
                    id: dataset[0],
                  },
                  data: dataset[1],
                },
              ],
            }),
          );
        });
      }
    }, [dispatch, dataLoaded, dataLayers]);
  
    // Pass the default kepler styling
    useEffect(() => {
      if(keplerConfLoaded && instanceConf){
        dispatch(addDataToMap({ datasets: [], option: { centerMap: true }, config: keplerConf }));
  
        // Load à custum map style from backend
        dispatch(inputMapStyle({style: instanceConf.defaultMapBoxStyleUrl, id:"maquette", name:"Maquette"}))
        dispatch(addCustomMapStyle())
        setMapUpdated(true);
      }
    }, [dispatch, keplerConfLoaded, keplerConf, instanceConf]);
  
    // TODO updatemap is not taken into account
    useEffect(() => {
      if (mapUpdated) {
        dispatch(updateMap({latitude:0, longitude: 0, zoom: 20}))
      }
    }, [dispatch,mapUpdated]);

    return mapUpdated ? (
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
         <AutoSizer>
            {({height, width }) => 
              <KeplerGl
              id="map"
              mapboxApiAccessToken={instanceConf.mapboxToken}
              width={width}
              height={height}
              appName="Datatlas"
              />
            }
            {/* <Logo /> */}
        </AutoSizer>
      </div>
     
    ) : (
      ''
    );
  }
