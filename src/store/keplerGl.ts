import { keplerGlReducer, uiStateUpdaters } from 'erasme-kepler.gl';
import { Reducer } from 'redux';
import { KeplerGlState } from 'erasme-kepler.gl/dist/reducers/core';
import { Filter } from 'erasme-kepler.gl/src/reducers';
import { KeplerTable } from 'erasme-kepler.gl/dist/utils';
import { getDatasetFieldIndexForFilter } from 'erasme-kepler.gl/dist/utils/gpu-filter-utils';
import { PickingInfo } from '@deck.gl/core/typed';
import { GeoJsonLayer } from '@deck.gl/layers/typed';
import { Geometry, Feature } from 'geojson';
import ActionTypes from 'erasme-kepler.gl/src/constants/action-types';

export interface KeplerFeatureProps {
  index: number;
}

export type KeplerFeature = Feature<Geometry & { coordinates: number[] }, KeplerFeatureProps>;

export interface DeckGLRequiredProps {
  idx: number;
}

export type DeckGLCompatibleLayer = Omit<
  GeoJsonLayer<KeplerFeature, DeckGLRequiredProps>,
  'props'
> & {
  props: DeckGLRequiredProps;
};

export type VirtualPickingInfo = Omit<PickingInfo, 'layer'> & {
  layer: DeckGLCompatibleLayer;
};

// Actions
export const onFeatureClick = (feature: KeplerFeature, layer: DeckGLCompatibleLayer) => ({
  type: ActionTypes.LAYER_CLICK,
  info: mapObjectToPickingInfo(feature, layer),
});

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
  mapState: {
    bearing: 0,
    dragRotate: false,
    latitude: 45.758507,
    longitude: 4.852149,
    pitch: 0,
    zoom: 9,
    isSplit: false,
  },
});

// Selectors
export const getMapById = (id: string) => (state) => state.keplerGl[id];
export const getVisState = (state) => state.keplerGl.map?.visState ?? {};
export const getHoverInfo = (state) => getVisState(state).hoverInfo;
export const getHoverInfoLayer = (state) => getHoverInfo(state)?.layer ?? null;
export const getClicked = (state) => getVisState(state).clicked ?? null;
export const getLayers = (state) => getVisState(state).layers ?? [];
export const getFirstLayers = (state) => getLayers(state)[0];
export const getLayerByIndex = (index: number) => (state) => getLayers(state)[index];
export const getLayerByDataId =
  (dataId) =>
  (layers): DeckGLCompatibleLayer | undefined => {
    let layerIdx;
    const layer = layers.find(({ config }, i) => {
      layerIdx = i;

      return config.dataId === dataId;
    });

    if (!layer) {
      return;
    }

    return { props: { idx: layerIdx }, ...layer };
  };
export const getFilters = (state) => getVisState(state).filters ?? [];
export const getFilterById = (filterId: string) => (state) => getFilters(state)[filterId];
export const getDatasets = (state) => getVisState(state).datasets ?? {};
export const getDataset = (dataId) => (state) => getDatasets(state)[dataId];

export const findObjectIndexFromDatasetByValue =
  ({ allData }) =>
  (fieldIdx, value) => {
    return allData.findIndex((values) => values[fieldIdx] === value);
  };
export const findObjectIndexesByValue =
  ({ allData }) =>
  (fieldIdx, value) =>
    allData.map((values, i) => (values[fieldIdx] === value ? i : -1)).filter((i) => i >= 0);

export const findObjectFromDatasetByIndex =
  ({ allData, fields }) =>
  (index) => {
    const objectValues = allData[index];
    if (objectValues) {
      const object = objectValues.reduce(mapValuesToFields({ fields }));

      return {
        ...object,
        properties: {
          ...object.properties,
          index,
        },
      };
    }

    return;
  };

export const findObjectFromDatasetByValue =
  ({ allData, fields }) =>
  (fieldIdx, value) => {
    const objectValues = allData.find((values) => values[fieldIdx] === value);
    if (objectValues) {
      return objectValues.reduce(mapValuesToFields({ fields }));
    }

    return;
  };

export const mapValuesToFields =
  ({ fields }) =>
  (object, value, idx) => ({
    ...object,
    [fields[idx].name]: value,
  });

export const fillFilterValue = (value) => (filter) => ({ ...filter, value: [value] });

const getFiltersFunctions = (dataset: KeplerTable, filters: Filter[]) => {
  return filters.reduce((acc, filter) => {
    const fieldIndex = getDatasetFieldIndexForFilter(dataset.id, filter);
    const field = fieldIndex !== -1 ? dataset.fields[fieldIndex] : null;

    return {
      ...acc,
      [filter.id]: getFilterFunction(field, dataset.id, filter),
    };
  }, {});
};

export function getFilterFunction(field, dataId, filter) {
  // field could be null in polygon filter
  const valueAccessor = field ? field.valueAccessor : (data) => null;

  return (data) => {
    const value = valueAccessor(data);
    if (Array.isArray(value)) {
      return value.some((v) => filter.value.includes(v));
    }

    return filter.value.includes(value);
  };
}

// see https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
export const mapObjectToPickingInfo = (
  object: KeplerFeature,
  layer: DeckGLCompatibleLayer,
): VirtualPickingInfo => ({
  object,
  coordinate: object.geometry.coordinates,
  picked: true,
  color: new Uint8Array(),
  layer,
  index: object.properties.index,
  x: 0,
  y: 0,
  pixelRatio: 1,
});

export default keplerGl;
