import { keplerGlReducer, uiStateUpdaters } from 'erasme-kepler.gl';
import { KeplerGlState } from 'erasme-kepler.gl/src/reducers/core';
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
export const getLayers = (state) => state.keplerGl.map?.visState?.layers ?? {};
export const getFilters = (state) => state.keplerGl.map?.visState?.filters ?? [];

export default keplerGl;
