import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { processGeojson } from 'erasme-kepler.gl/processors';
import { KeplerGlSchema } from 'erasme-kepler.gl/schemas';
import {
  addCustomMapStyle,
  addDataToMap,
  inputMapStyle,
  receiveMapConfig,
} from 'erasme-kepler.gl/actions';
import App from '../App';

export default function FetchInstanceConf() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const [instanceConf, setInstanceConf] = useState({});
  const [instanceConfLoaded, setInstanceConfLoaded] = useState(false);

  const [keplerConfLoaded, setKeplerConfLoaded] = useState(false);

  const dispatch = useDispatch();

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Retreive Instance configuration
  useEffect(() => {
    console.log('FETCH DATA ' + backendUrl + '/api/conf/instance');
    fetch(backendUrl + '/api/conf/instance', { method: 'GET' })
      .then((res) => res.json())
      .then((instanceConf) => {
        setInstanceConf(instanceConf);
        setInstanceConfLoaded(true);
      });
  }, [dispatch]);

  // Retreive Kepler configuration
  useEffect(() => {
    console.log('FETCH DATA ' + backendUrl + '/api/conf/kepler');
    fetch(backendUrl + '/api/conf/kepler', { method: 'GET' })
      .then((res) => res.json())
      .then((config) => {
        const parsedConfig = KeplerGlSchema.parseSavedConfig(config);
        console.log('parsedConfig', parsedConfig);
        dispatch(receiveMapConfig(parsedConfig));
        setKeplerConfLoaded(true);
      });
  }, [dispatch]);

  useEffect(async () => {
    if (keplerConfLoaded && instanceConfLoaded) {
      // Pass the default kepler styling
      dispatch(addDataToMap({ datasets: [], option: { centerMap: true } }));

      // Load à custum map style from backend
      dispatch(
        inputMapStyle({
          style: instanceConf.defaultMapBoxStyleUrl,
          id: 'maquette',
          name: 'Maquette',
        }),
      );
      dispatch(addCustomMapStyle());

      const mapData = {
        datasets: [],
      };
      const promises = instanceConf.layers.map(async (layer) => {
        return fetch(layer.url)
          .then((res) => res.json())
          .then((data) => {
            mapData.datasets.push({
              info: {
                label: layer.name,
                id: layer.name,
              },
              data: data.fields ? data : processGeojson(data),
            });
          })
          .catch(() => {});
      });
      await Promise.all(promises).then(() => {
        dispatch(addDataToMap(mapData));
        setDataLoaded(true);
      });
    }
  }, [dispatch, keplerConfLoaded, instanceConfLoaded]);

  if (instanceConfLoaded && dataLoaded) {
    //console.log("Data Layers", dataLayers);

    return <App instanceConf={instanceConf} />;
  } else {
    return <div>Loading...</div>;
  }
}
