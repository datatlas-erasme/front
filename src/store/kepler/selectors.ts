// Kepler Selector
export const getMapById = (id: string) => (state) => state.keplerGl[id];
export const getLayers = (state) => state.keplerGl.map?.visState?.layers ?? {};
export const getLayerByIndex = (index: number) => (state) => getLayers(state)[index];
export const getFilters = (state) => state.keplerGl.map?.visState?.filters ?? [];
export const getFilterById = (filterId: string) => (state) =>
  state.keplerGl.map.visState.filters[filterId];
export const getHoverInfo = (state) => state.keplerGl.map?.visState?.hoverInfo;
export const getHoverInfoLayer = (state) => getHoverInfo(state)?.layer ?? null;
export const getClicked = (state) => state.keplerGl.map?.visState?.clicked ?? null;
