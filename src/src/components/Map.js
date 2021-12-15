import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  addDataToMap, 
  updateMap, 
  addCustomMapStyle, 
  inputMapStyle } from 'kepler.gl/actions';
import { processGeojson } from 'kepler.gl/processors';
import { MapPopoverFactory, injectComponents } from 'kepler.gl/components';
import CustomMapPopoverFactory from '../factories/map-popover';
import BottomRightSection from '../components/BottomRightSection';
import Logo from '../components/Logo';
import FilterSidePanel from '../components/FilterSidePanel';

// Inject the point sidepanel component
const KeplerGl = injectComponents([[MapPopoverFactory, CustomMapPopoverFactory]]);

export default function Map() {
    const [dataLayers, setDataLayers] = useState([]);
  
    const [dataLoaded, setDataLoaded] = useState(false);
    const [mapUpdated, setMapUpdated] = useState(false);
  
    const [instanceConf, setInstanceConf] = useState({})
    const [instanceConfLoaded, setInstanceConfLoaded] = useState(false)
  
    const [keplerConf, setKeplerConf] = useState({})
    const [keplerConfLoaded, setKeplerConfLoaded] = useState(true)
  
    const dispatch = useDispatch();
  
    const backendUrl = process.env.REACT_APP_BACKEND_URL
    
    //TODO create helper to fetch conf ?
  
    // Retreive Instance configuration
    useEffect(() => {
      console.log("FETCH DATA" + backendUrl + "/api/conf/instance")
      fetch(backendUrl + "/api/conf/instance")
          .then((res) => res.json())
          .then((data) => {
            setInstanceConf(data)
            setInstanceConfLoaded(true)
          });  
    }, []);
  
     // Retreive Kepler configuration
     useEffect(() => {
      console.log("FETCH DATA" + backendUrl + "/api/conf/kepler")
      fetch(backendUrl + "/api/conf/kepler")
          .then((res) => res.json())
          .then((data) => {
            setKeplerConf(data)
            setKeplerConfLoaded(true)
          });
     
      //setTestInstance(promises)
      
    }, []);
      
    // Get instance config / fetch data and store into DataLayers
    useEffect(() => {
      if(instanceConfLoaded) {
        const buffer = [];
        const promises = instanceConf.layers.map((layer) => {
          //console.log(layer.type);
    
          return fetch(layer.url)
            .then((res) => res.json())
            .then((data) => {
              if (data.fields) {
                buffer.push([layer.name, data]);
              } else {
                buffer.push([layer.name, processGeojson(data)]);
              }
            });
        });
        Promise.all(promises).then(() => {
          setDataLayers(buffer);
          setDataLoaded(true);
          //console.log('BUFFER', buffer);
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
      if(keplerConfLoaded){
        dispatch(addDataToMap({ datasets: [], option: { centerMap: false }, config: keplerConf }));
  
        // Load à custum map style from backend
        dispatch(inputMapStyle({style: instanceConf.defaultMapBoxStyleUrl, id:"monochrome", name:"Monochrome"}))
        dispatch(addCustomMapStyle())
        setMapUpdated(true);
      }
    }, [dispatch, keplerConfLoaded, keplerConf]);
  
    // TODO updatemap is not taken into account
    useEffect(() => {
      console.log(instanceConf.defaultMapLocation)
      if (mapUpdated) {
        dispatch(updateMap({latitude:0, longitude: 0, zoom: 10}))
      }
    }, [dispatch,mapUpdated]);
    
    return mapUpdated ? (
      <div>
        <KeplerGl
          id="map"
          mapboxApiAccessToken={instanceConf.mapboxToken}
          width={window.innerWidth}
          height={window.innerHeight}
          appName="Datatlas"
        />
        <Logo />
        <FilterSidePanel />
        <BottomRightSection />
      </div>
    ) : (
      ''
    );
  }