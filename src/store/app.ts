import { createAction, handleActions } from 'redux-actions';
import InstanceConfigurationInterface from '../domain/InstanceConfigurationInterface';
import { getFilters } from './keplerGl';
import { isFilterAllowed } from './keplerGl/search';

// Constants
export const INIT = 'INIT';
export const UPDATE_INSTANCE_CONFIGURATION = 'UPDATE_INSTANCE_CONFIGURATION';
export const SHOW_MODAL = 'SHOW_MODAL';

// Actions
export const appInit = createAction(INIT);
export const updateInstanceConfiguration = createAction(UPDATE_INSTANCE_CONFIGURATION);
export const showModal = createAction(SHOW_MODAL);

export interface AppState {
  appName: string;
  loaded: boolean;
  configuration?: InstanceConfigurationInterface;
}

// Reducer
const initialState: AppState = {
  appName: 'Datatlas',
  loaded: false,
  configuration: undefined,
};

const app = handleActions<AppState, any>(
  {
    [INIT]: (state) => ({
      ...state,
      loaded: true,
    }),
    [UPDATE_INSTANCE_CONFIGURATION]: (state, action) => ({
      ...state,
      configuration: action.payload,
    }),
    [SHOW_MODAL]: (state, action) => ({
      ...state,
      modal: action.payload,
    }),
  },
  initialState,
);

// Selectors
export const getTheme = (state) => state.app.configuration.theme;
export const getThemeName = (state) => getTheme(state).name;
export const getMapboxToken = (state) => state.app.configuration.mapboxToken;
export const getBottomRightButtons = (state) => state.app.configuration.bottomRightButtons;
export const getSearchFilters = (state) => state.app.configuration.searchFilters;
export const getValidSearchFilters = (state) => {
  const searchFilters = getSearchFilters(state);
  if (!searchFilters) {
    return null;
  }

  const filterIds = getFilters(state).map(({ id }) => id);

  return searchFilters.filter((id) => {
    const exists = isFilterAllowed(filterIds)({ id });
    if (!exists) {
      // eslint-disable-next-line no-console
      console.warn(`Search filter ${id} doesn't exist.`);
    }

    return exists;
  });
};

export default app;
