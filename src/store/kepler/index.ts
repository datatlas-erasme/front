import { keplerGlReducer, uiStateUpdaters } from 'erasme-kepler.gl';
import { KeplerGlState } from 'erasme-kepler.gl/src/reducers/core';
import { Reducer } from 'redux';
// import { KeplerGlSchema } from 'erasme-kepler.gl/schemas';
// import { receiveMapConfig } from 'erasme-kepler.gl/actions';
// import { MAP_CONFIG_KEPLER, setLoadingMapStatus } from './actions';

// Retrieve Kepler configuration.
// export async function loadKeplerConfigurations(dispatch) {
//   return (dispatch) => {
//     fetch(MAP_CONFIG_KEPLER, { method: 'GET' })
//       .then((res) => res.json())
//       .then((config) => {
//         const parsedConfig = KeplerGlSchema.parseSavedConfig(config);
//         dispatch(receiveMapConfig(parsedConfig));
//         console.log(parsedConfig);
//         dispatch(setLoadingMapStatus(true));
//       })
//       .catch((error) => {
//         console.log('ERROR in loadMapConfigurations: ', error);
//
//         return error;
//       });
//   };
// }

// Reducer
const index: Reducer<KeplerGlState> = keplerGlReducer.initialState({
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
export default index;
