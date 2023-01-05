import { keplerGlReducer, uiStateUpdaters } from 'kepler.gl';
import { KeplerGlState } from 'kepler.gl/src/reducers/core';
import { Reducer } from 'redux';

// Reducer
const keplerGl: Reducer<KeplerGlState> = keplerGlReducer.initialState({
  uiState: {
    readonly: true,
    // hide side panel when mounted
    activeSidePanel: null,
    // hide all modals when mounted
    currentModal: null,

    mapControls: {
      ...uiStateUpdaters.DEFAULT_MAP_CONTROLS,
      visibleLayers: {
        show: false,
      },
      mapLegend: {
        show: false,
        active: false,
      },
      toggle3d: {
        show: false,
      },
      splitMap: {
        show: false,
      },
    },
  },
  visState: {},
});

// Selectors
export const getMapById = (id: string) => (state) => state.keplerGl[id];
export const getLayers = (state) => state.keplerGl.map?.visState?.layers ?? [];
export const getLayerByIndex = (index: number) => (state) => getLayers(state)[index];
export const getFilters = (state) => state.keplerGl.map?.visState?.filters ?? [];
export const getFirstLayers = (state) => getLayers(state)[0];
export const getClicked = (state) => state.keplerGl.map?.visState?.clicked ?? null;

export default keplerGl;
