import { createAction } from 'redux-actions';
// import { KeplerGlSchema } from 'erasme-kepler.gl/schemas';
// import { combinedUpdaters, uiStateUpdaters } from 'erasme-kepler.gl/reducers';
// import { processGeojson } from 'erasme-kepler.gl/processors';
// import { generateHashId } from '../../utils/strings';
import { SET_LOADING_STATUS, LOAD_REMOTE_RESOURCE_SUCCESS } from '../types';
// import { useDispatch } from 'react-redux';

export const FETCHING_CONFIG = 'FETCHING_CONFIG';
export const INIT = 'INIT';
export const FETCHING_CONFIG_SUCCESS = 'FETCHING_CONFIG_SUCCESS';
export const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR';
export const UPDATE_INSTANCE_CONFIGURATION = 'UPDATE_INSTANCE_CONFIGURATION';

// Actions
export const appInit = createAction(INIT);
export const updateInstanceConfiguration = createAction(UPDATE_INSTANCE_CONFIGURATION);

export const fetchingConfig = createAction(FETCHING_CONFIG);
export const fetchingConfigInstanceSuccess = (config) => {
  return {
    type: FETCHING_CONFIG_SUCCESS,
    payload: config,
  };
};
export const fetchingDataError = createAction(FETCHING_DATA_ERROR, (error) => ({
  payload: error,
}));

export function setLoadingMapStatus(isMapLoading) {
  return {
    type: SET_LOADING_STATUS,
    isMapLoading,
  };
}

export function loadRemoteDataSuccess(response, config) {
  return {
    type: LOAD_REMOTE_RESOURCE_SUCCESS,
    response,
    config,
  };
}

// export function loadRemoteResourceError(error, url) {
//   return {
//     type: LOAD_REMOTE_RESOURCE_ERROR,
//     error,
//     url,
//   };
// }

// Test with axios
// export const FETCH_ARTICLE_DETAILS = 'FETCH_ARTICLE_DETAILS';
// export const SET_ARTICLE_DETAILS = 'SET_ARTICLE_DETAILS';
// export const API = 'API';
// export const API_START = 'API_START';
// export const API_END = 'API_END';
// export const ACCESS_DENIED = 'ACCESS_DENIED';
// export const API_ERROR = 'API_ERROR';
//
// export const apiStart = (label) => ({
//   type: API_START,
//   payload: label,
// });
//
// export const apiEnd = (label) => ({
//   type: API_END,
//   payload: label,
// });
//
// export const accessDenied = (url) => ({
//   type: ACCESS_DENIED,
//   payload: {
//     url,
//   },
// });
//
// export const apiError = (error) => ({
//   type: API_ERROR,
//   error,
// });
//
// export function fetchData() {
//   return apiAction({
//     url: MAP_CONFIG_INSTANCE,
//     onSuccess: setAllData,
//     onFailure: () => console.log('Error occured loading articles'),
//     label: FETCH_ARTICLE_DETAILS,
//   });
// }
//
// function setAllData(data) {
//   return {
//     type: SET_ARTICLE_DETAILS,
//     payload: data,
//   };
// }
//
// function apiAction({
//   url = '',
//   method = 'GET',
//   data = null,
//   accessToken = null,
//   onSuccess = (data: any) => {},
//   onFailure = () => {},
//   label = '',
//   headersOverride = null,
// }) {
//   return {
//     type: API,
//     payload: {
//       url,
//       method,
//       data,
//       accessToken,
//       onSuccess,
//       onFailure,
//       label,
//       headersOverride,
//     },
//   };
// }
//
// export const loadRemoteResourceSuccess = (state, action) => {
//   // TODO: replace generate with a different function
//   const datasetId = action.options.id || generateHashId(6);
//   const { dataUrl } = action.options;
//   let processorMethod = processGeojson;
//   console.log(processorMethod);
//   // TODO: create helper to determine file ext eligibility
//   if (dataUrl.includes('.json') || dataUrl.includes('.geojson')) {
//     processorMethod = processGeojson;
//   }
//
//   const datasets = {
//     info: {
//       id: datasetId,
//     },
//     data: processorMethod(action.response),
//   };
//
//   console.log(datasets);
//
//   const config = action.config ? KeplerGlSchema.parseSavedConfig(action.config) : null;
//
//   const keplerGlInstance = combinedUpdaters.addDataToMapUpdater(
//     state.keplerGl.map, // "map" is the id of your kepler.gl instance
//     {
//       payload: {
//         datasets,
//         config,
//         options: {
//           centerMap: Boolean(!action.config),
//         },
//       },
//     },
//   );
//
//   return {
//     ...state,
//     app: {
//       ...state.app,
//       currentSample: action.options,
//       isMapLoading: false, // we turn off the spinner
//     },
//     keplerGl: {
//       ...state.keplerGl, // in case you keep multiple instances
//       map: keplerGlInstance,
//     },
//   };
// };
//
// export const loadRemoteResourceError = (state, action) => {
//   const { error, url } = action;
//
//   const errorNote = {
//     type: 'error',
//     message: error.message || `Error loading ${url}`,
//   };
//
//   return {
//     ...state,
//     app: {
//       ...state.app,
//       isMapLoading: false, // we turn of the spinner
//     },
//     keplerGl: {
//       ...state.keplerGl, // in case you keep multiple instances
//       map: {
//         ...state.keplerGl.map,
//         uiState: uiStateUpdaters.addNotificationUpdater(state.keplerGl.map.uiState, {
//           payload: errorNote,
//         }),
//       },
//     },
//   };
// };
