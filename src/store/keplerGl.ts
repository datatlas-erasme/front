import { keplerGlReducer, uiStateUpdaters } from 'erasme-kepler.gl';

export const SET_MAP_CONFIG = 'Set map config';

const keplerGl = keplerGlReducer.initialState({
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

export default keplerGl;
