import {createAction, handleActions} from 'redux-actions';
import KeplerGlSchema from 'erasme-kepler.gl/schemas';
import {ActionTypes} from 'erasme-kepler.gl/actions';

// CONSTANTS
export const INIT = 'INIT';
export const SET_MAP_CONFIG = 'Set map config';
export const UPDATE_MAP = 'Update Map';
export const TOGGLE_MODAL= 'Toggle modal';
export const SET_FILTER = 'Add filter';
export const HIDE_AND_SHOW_SIDE_PANEL = 'Hide and show side panel'; 

// ACTIONS
export const appInit = createAction(INIT);
export const setMapConfig = createAction(SET_MAP_CONFIG);
export const updateMap = createAction(UPDATE_MAP );
export const toggleModal = createAction(TOGGLE_MODAL);
export const setFilterUpdater = createAction(SET_FILTER);
export const hideAndShowSidePanel = createAction(HIDE_AND_SHOW_SIDE_PANEL);

// INITIAL_STATE
const initialState = {
  appName: 'Opendata alimentaire',
  loaded: false
};

// REDUCER
const appReducer = handleActions(
  {
      [INIT]: (state, action) => ({
        ...state,
        loaded: true
    }),

      [SET_MAP_CONFIG]: (state, action) => ({
        ...state,
        mapConfig: KeplerGlSchema.getConfigToSave(action.payload)
    }),

    // listen on kepler.gl map update action to store a copy of viewport in app state
      [ActionTypes.UPDATE_MAP]: (state, action) => ({
        ...state,
        viewport: action.payload
    }),

      [ActionTypes.SET_FILTER] : (state, action) => ({state}),

      [ActionTypes.HIDE_AND_SHOW_SIDE_PANEL]: (state, action) => ({
        ...state,
        uiState: {
          ...state.uiState,
          readOnly: !state.uiState.readOnly
        }
      }),
    
  }, 
  initialState
  );

export default appReducer;