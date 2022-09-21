import * as fuzzysort from 'fuzzysort';
import { FILTER_TYPES } from 'erasme-kepler.gl/dist/constants/default-settings';
import { FilterBase } from 'erasme-kepler.gl/src/reducers/vis-state-updaters';
import {
  fillFilterValue,
  findObjectIndexesByValue,
  findObjectFromDatasetByIndex,
  getDatasets,
  getFilters,
  getLayerByDataId,
  getLayers,
  KeplerFeature,
  DeckGLCompatibleLayer,
} from '../keplerGl';

export interface FilterResults {
  dataId: string | number;
  fieldIdx: number;
  results: Fuzzysort.Results;
}

export interface MatchingFeatureResults<Object extends Record<string, any>> {
  obj: Object;
  layer: DeckGLCompatibleLayer;
  resultsByField: Fuzzysort.Results;
}

export type Match = MatchingFeatureResults<KeplerFeature>;

export const getFirstResultScore = (results) => (results.length > 0 ? results[0].score : -10000);

const isValidSearchFilter = (filter: FilterBase) =>
  filter.type === FILTER_TYPES.multiSelect && filter.domain && filter.domain.length > 0;

const isFilterAllowed = (allowedFilters: FilterBase['id'][]) => (filter: FilterBase) =>
  allowedFilters.includes(filter.id);

export const findMatches =
  (searchQuery: string, allowedFilters: FilterBase['id'][]) =>
  (state): MatchingFeatureResults<KeplerFeature>[] => {
    if (searchQuery.length <= 1) {
      return [];
    }

    const datasets = getDatasets(state);
    if (Object.keys(datasets).length === 0) {
      return [];
    }

    const validFilters = getFilters(state)
      .filter(isValidSearchFilter)
      .filter(isFilterAllowed(allowedFilters))
      .map(fillFilterValue(searchQuery));
    if (validFilters.length === 0) {
      return [];
    }

    const layers = getLayers(state);
    const searchOptions = {
      limit: 20, // don't return more results than you need!
      threshold: -800, // don't return bad results
    };
    const resultsGroupedByObjectIndex = validFilters
      .map(
        ({ domain, fieldIdx: [fieldIdx], dataId: [dataId] }) =>
          ({
            dataId,
            fieldIdx,
            results: fuzzysort.go(searchQuery, domain, searchOptions),
          } as FilterResults),
      )
      .filter(({ results }) => results.length > 0)
      .sort(({ results: a }, { results: b }) => getFirstResultScore(a) - getFirstResultScore(b))
      .map(({ dataId, fieldIdx, results }) => ({
        dataId,
        fieldIdx,
        results: results.map((result) => ({
          ...result,
          objIndexes: findObjectIndexesByValue(datasets[dataId])(fieldIdx, result.target),
        })),
      }))
      .reduce(groupResultsByObject({ datasets, layers }), {});

    return Object.values(resultsGroupedByObjectIndex);
  };

const groupResultsByObject =
  ({ datasets, layers }) =>
  (resultsGroupedByObjectIndex, { dataId, fieldIdx, results }) => {
    results.forEach(({ objIndexes, ...result }) => {
      objIndexes.forEach((objIndex) => {
        if (resultsGroupedByObjectIndex[objIndex]) {
          resultsGroupedByObjectIndex[objIndex] = {
            ...resultsGroupedByObjectIndex[objIndex],
            resultsByField: {
              ...resultsGroupedByObjectIndex[objIndex].resultsByField,
              [fieldIdx]: result,
            },
          };
        } else {
          resultsGroupedByObjectIndex[objIndex] = {
            obj: findObjectFromDatasetByIndex(datasets[dataId])(objIndex),
            layer: getLayerByDataId(dataId)(layers),
            resultsByField: {
              [fieldIdx]: result,
            },
          };
        }
      });
    });

    return resultsGroupedByObjectIndex;
  };
