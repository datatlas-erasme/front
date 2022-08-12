import { createAction, handleActions } from 'redux-actions';

// Constants
export const INIT = 'INIT';
export const UPDATE_INSTANCE_CONFIGURATION = 'UPDATE_INSTANCE_CONFIGURATION';

// Actions
export const appInit = createAction(INIT);
export const updateInstanceConfiguration = createAction(UPDATE_INSTANCE_CONFIGURATION);

// Reducer
const initialState = {
  appName: 'Opendata alimentaire',
  loaded: false,
  configuration: null,
};

const app = handleActions(
  {
    [INIT]: (state) => ({
      ...state,
      loaded: true,
    }),
    [UPDATE_INSTANCE_CONFIGURATION]: (state, action) => ({
      ...state,
      configuration: action.payload,
    }),
  },
  initialState,
);

// Selectors
export const getTheme = (state) => state.app.configuration.theme;
export const getThemeName = (state) => getTheme(state).name;
export const getMapboxToken = (state) => state.app.configuration.mapboxToken;

export default app;
