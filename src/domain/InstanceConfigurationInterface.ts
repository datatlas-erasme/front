import { FilterBase } from 'erasme-kepler.gl/src/reducers/vis-state-updaters';

export default interface InstanceConfigurationInterface {
  mapboxToken: string;
  theme: {
    name: string;
  };
  defaultMapBoxStyleUrl: string;
  layers: [
    {
      url: string;
      name: string;
    },
  ];
  searchFilters: FilterBase['id'][];
}
