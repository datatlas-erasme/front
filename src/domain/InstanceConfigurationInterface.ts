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
}
