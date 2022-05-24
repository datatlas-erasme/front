import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  addDataToMap,
  addCustomMapStyle, 
  inputMapStyle,
  layerTypeChange,
} from 'erasme-kepler.gl/actions';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { processGeojson } from 'erasme-kepler.gl/processors';
import { 
  MapPopoverFactory, 
  injectComponents,  
} from 'erasme-kepler.gl/components';
import CustomMapPopoverFactory from '../../factories/map-popover';

// Inject the point sidepanel component
const KeplerGl = injectComponents([
  [MapPopoverFactory, CustomMapPopoverFactory], 
]);

export default function Map() {
    const [dataLayers, setDataLayers] = useState([]);
  
    const [dataLoaded, setDataLoaded] = useState(false);
    const [mapUpdated, setMapUpdated] = useState(false);
  
    const [instanceConf, setInstanceConf] = useState({})
    const [instanceConfLoaded, setInstanceConfLoaded] = useState(false)
  
    const [keplerConf, setKeplerConf] = useState({})
    const [keplerConfLoaded, setKeplerConfLoaded] = useState(true)
  
    const dispatch = useDispatch();

    // const geojson = {
    //   "type": "FeatureCollection",
    //   "features": [{
    //     "type": "Feature",
    //     "properties": {
    //       "lat": data.geometry.coordinates[0],
    //       "lon": data.geometry.coordinates[1],
    //     }
    //   }]

    // }
  
    const backendUrl = process.env.REACT_APP_BACKEND_URL
    
    // Retreive Instance configuration
    useEffect(() => {
       fetch(backendUrl + "/api/conf/instance", { method: "GET" })
          .then((res) => res.json())
          .then((data) => {
            setInstanceConf(data)
            setInstanceConfLoaded(true)
          });  
    }, []);
  
     // Retreive Kepler configuration
     useEffect(() => {
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
                console.log(processGeojson(data));
                buffer.push([layer.name, processGeojson(data)]);
                buffer.push()
              }
              console.log(data);
            });
        });
        Promise.all(promises).then(() => {
          setDataLayers(buffer);
          setDataLoaded(true);
        });
        console.log(buffer.rows);

      }
      
    }, [instanceConf, instanceConfLoaded]);

    console.log(instanceConf.layers);
  
    // Get DataLayers and add data to map
    useEffect(() => {
      if (dataLayers) {
                dataLayers.map((dataset, index) => {
          // console.log(dataset[index]);
          // console.log(addDataToMap({datasets: [
          //   {
          //     info: {
          //       label: dataset[index],
          //       id: dataset[index],
          //     },
          //     data: dataset[index],
          //   },
          // ],}));

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
              options: {
                centerMap: true,
                readOnly: false,
                keepExistingConfig: false
              },
            }),
            
          );
        });
      }
      // dispatch(layerTypeChange(dataLayers ,'cluster'));
      ;
    }, [dispatch, dataLoaded, dataLayers]);
  
    // const parsedConfig = KeplerGlSchema.parseSavedConfig(keplerConf);
    // dispatch(receiveMapConfig(parsedConfig));
    // console.log(parsedConfig);

    // Pass the default kepler styling
    useEffect(() => {

      if(keplerConfLoaded && instanceConf){

        dispatch(addDataToMap({ datasets : {}, config: keplerConf }));
        
        //  const parsedConfig = KeplerGlSchema.parseSavedConfig(keplerConf);
        // dispatch(receiveMapConfig(parsedConfig));
        // console.log(receiveMapConfig(parsedConfig));

        // Load à custum map style from backend
        dispatch(inputMapStyle({style: instanceConf.defaultMapBoxStyleUrl, id:"maquette", name:"Maquette"}))
        dispatch(addCustomMapStyle())
        setMapUpdated(true);
        // dispatch(layerTypeChange(keplerConf ,'cluster'));

      }
    }, [dispatch, keplerConfLoaded, keplerConf, instanceConf]);
  
    // TODO updatemap is not taken into account
    // useEffect(() => {
    //   if (mapUpdated) {
    //     // dispatch(updateMap({latitude:0, longitude: 0, zoom: 20}))
        
    //   }
    // }, [dispatch,mapUpdated]);

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