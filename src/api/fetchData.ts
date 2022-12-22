import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  receiveMapConfig,
  addDataToMap,
  inputMapStyle,
  addCustomMapStyle,
} from 'erasme-kepler.gl/actions';
import KeplerGlSchema from 'erasme-kepler.gl/schemas';
import { processGeojson } from 'erasme-kepler.gl/processors';
import { AddDataToMapPayload, ProtoDataset } from 'erasme-kepler.gl/src/actions/actions';
import {
  fetchingConfig,
  appInit,
  fetchingDataError,
  FETCHING_CONFIG,
  updateInstanceConfiguration,
} from '../store/app/actions';
import { MAP_CONFIG_INSTANCE, MAP_CONFIG_KEPLER } from '../store/types';

export const fetchInstanceConfig = createAsyncThunk(FETCHING_CONFIG, async () => {
  fetchingConfig(true);

  try {
    const response = await fetch(MAP_CONFIG_INSTANCE)
      .then((response) => response.json())
      .then((config) => {
        updateInstanceConfiguration(config);
      });
  } catch (error) {
    fetchingDataError(error);
  }
});

// export function fetchInstanceConfig() {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(MAP_CONFIG_INSTANCE)
//         .then((response) => response.json())
//         .then((config) => {
//           console.log(config);
//           dispatch(fetchingConfig(true));
//           dispatch(fetchingConfigInstanceSuccess(config));
//           dispatch(addCustomMapStyle(config));
//           dispatch(receiveMapConfig(config));
//         });
//     } catch (error) {
//       dispatch(fetchingDataError(error));
//     }
//   };
// }

export function fetchKeplerConfig() {
  return async (dispatch) => {
    // dispatch(fetchingConfig(true));
    try {
      await fetch(MAP_CONFIG_KEPLER)
        .then((res) => res.json())
        .then((config) => {
          const parsedConfig = KeplerGlSchema.parseSavedConfig(config);
          dispatch(receiveMapConfig(parsedConfig));
        });
    } catch (error) {
      dispatch(fetchingDataError(error));
    }
  };
}

export const setInstanceConfiguration = () => {
  return async (dispatch) => {
    if (fetchingConfig(true)) {
      const mapData: AddDataToMapPayload & { datasets: ProtoDataset[] } = {
        datasets: [],
        config: receiveMapConfig,
        options: { keepExistingConfig: true },
      };
      const promises = receiveMapConfig.layers.map(async (layer) => {
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
                console.log(row);

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
      if (receiveMapConfig) {
        await Promise.all(promises).then(() => {
          dispatch(addDataToMap(mapData));
        });
      }

      // Load custom map style.
      dispatch(
        inputMapStyle({
          style: 'mapStyleChangeUpdater',
          id: 'maquette',
          name: 'Maquette',
        }),
      );
      dispatch(addCustomMapStyle());
      dispatch(appInit());
    }
  };
};

// const fetchData = createAsyncThunk('FETCHING_DATA', async () => {
//   const response = await fetch(MAP_CONFIG_INSTANCE)
//     .then((res) => res.json())
//     // .then((config) => console.log(config), config)
//     .then(({ config }) => {
//       console.log(config);
//     })
//     .catch((error) => {
//       console.log('ERROR in loadMapConfigurations: ', error);
//
//       return error;
//     });
//
//   return response;
// });

// const apiMiddleware =
//   ({ dispatch }) =>
//   (next) =>
//   (action) => {
//     if (action.type !== API) return;
//
//     const { url, method, data, onSuccess, onFailure, label } = action.payload;
//     const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
//
//     axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';
//     axios.defaults.headers.common['Content-Type'] = MAP_CONFIG_INSTANCE;
//     // axios.defaults.headers.common['Authorization'] = `Bearer${token}`;
//
//     if (label) {
//       dispatch(apiStart(label));
//     }
//
//     axios
//       .request({
//         url,
//         method,
//         [dataOrParams]: data,
//       })
//       .then(({ data }) => {
//         dispatch(onSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(apiError(error));
//         dispatch(onFailure(error));
//
//         if (error.response && error.response.status === 403) {
//           dispatch(accessDenied(window.location.pathname));
//         }
//       })
//       .finally(() => {
//         if (label) {
//           dispatch(apiEnd(label));
//         }
//       });
//   };
// export default apiMiddleware;
