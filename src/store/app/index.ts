import { handleActions } from 'redux-actions';
import {
  FETCHING_CONFIG_SUCCESS,
  FETCHING_DATA_ERROR,
  FETCHING_CONFIG,
  INIT,
  UPDATE_INSTANCE_CONFIGURATION,
} from './actions';

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

export interface AppState {
  appName: string;
  loaded: boolean;
  config?: {};
  error: null;
  isMapLoad: boolean;
}

// Reducer
export const initialState: AppState = {
  appName: 'Datatlas',
  loaded: true,
  config: undefined,
  isMapLoad: true,
  error: null,
};

const index = handleActions<AppState, any>(
  {
    [INIT]: (state) => ({
      ...state,
      loaded: false,
    }),
    [FETCHING_CONFIG]: (state) => ({
      ...state,
      loaded: false,
    }),
    [UPDATE_INSTANCE_CONFIGURATION]: (state, action) => ({
      ...state,
      config: action.payload,
    }),
    [FETCHING_CONFIG_SUCCESS]: (state, action) => ({
      ...state,
      config: action.payload,
    }),
    [FETCHING_DATA_ERROR]: (state, action) => ({
      ...state,
      error: action.payload,
      loaded: true,
    }),
  },
  initialState,
);
export default index;
