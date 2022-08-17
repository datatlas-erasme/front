import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { processGeojson } from 'erasme-kepler.gl/processors';
import { KeplerGlSchema } from 'erasme-kepler.gl/schemas';
import { AddDataToMapPayload, ProtoDataset } from 'erasme-kepler.gl/src/actions/actions';
import { ParsedConfig } from 'erasme-kepler.gl/src/schemas';
import {
  addCustomMapStyle,
  addDataToMap,
  inputMapStyle,
  receiveMapConfig,
} from 'erasme-kepler.gl/actions';
import { appInit, updateInstanceConfiguration } from '../store/app';
import InstanceConfigurationInterface from '../domain/InstanceConfigurationInterface';

export default function useInstanceConfiguration() {
  const [instanceConf, setInstanceConf] = useState<InstanceConfigurationInterface | undefined>(
    undefined,
  );

  const [parsedConfig, setParsedConfig] = useState<ParsedConfig | undefined>(undefined);
  const [keplerConfLoaded, setKeplerConfLoaded] = useState(false);

  const dispatch = useDispatch();

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Retrieve Instance configuration.
  useEffect(() => {
    fetch(backendUrl + '/api/conf/instance', { method: 'GET' })
      .then((res) => res.json())
      .then((instanceConf) => {
        setInstanceConf(instanceConf);
        dispatch(updateInstanceConfiguration(instanceConf));
      });
  }, [dispatch]);

  // Retrieve Kepler configuration.
  useEffect(() => {
    fetch(backendUrl + '/api/conf/kepler', { method: 'GET' })
      .then((res) => res.json())
      .then((config) => {
        const parsedConfig = KeplerGlSchema.parseSavedConfig(config);
        setParsedConfig(parsedConfig);
        dispatch(receiveMapConfig(parsedConfig));
        setKeplerConfLoaded(true);
      });
  }, [dispatch]);

  useEffect(() => {
    (async function () {
      if (keplerConfLoaded && instanceConf) {
        const mapData: AddDataToMapPayload & { datasets: ProtoDataset[] } = {
          datasets: [],
          config: parsedConfig,
          options: { keepExistingConfig: true },
        };

        const promises = instanceConf.layers.map(async (layer) => {
          return fetch(layer.url)
            .then((res) => res.json())
            .then((data) => {
              let processedData;
              if (data.fields) {
                processedData = data;
              } else {
                processedData = processGeojson(data);
                // in data.rows[] filter the geometry.coordinates and return lat, lng
                const dataRows = processedData.rows.map((row) => {
                  // pushs the lat, lng to the row
                  row.push(row[0].geometry.coordinates[1], row[0].geometry.coordinates[0]);

                  return row;
                });

                // in processedData append {name : lat, type : 'number'} and same for long
                processedData.fields.push({ name: 'lat', type: 'number' });
                processedData.fields.push({ name: 'lng', type: 'number' });
                processedData.rows = dataRows;
              }

              mapData.datasets.push({
                info: {
                  label: layer.name,
                  id: layer.name,
                },
                data: processedData,
              });
            })
            .catch(() => {});
        });
        await Promise.all(promises).then(() => {
          dispatch(addDataToMap(mapData));
        });

        // Load custom map style.
<<<<<<< HEAD
=======
        const mapData: AddDataToMapPayload & { datasets: ProtoDataset[] } = {
          datasets: [],
          config: parsedConfig,
          options: { keepExistingConfig: true },
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
        });
>>>>>>> fbbca2e (FIX: inputMapStyle Kepler to load the defaultMapBoxStyleUrl)
        dispatch(
          inputMapStyle({
            style: instanceConf.defaultMapBoxStyleUrl,
            id: 'maquette',
            name: 'Maquette',
          }),
        );
        dispatch(addCustomMapStyle());

        dispatch(appInit());
      }
    })();
  }, [dispatch, keplerConfLoaded]);

  return instanceConf;
}
