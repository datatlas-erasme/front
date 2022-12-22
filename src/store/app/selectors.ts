// App Selectors
export const testState = (state) => state;
export const getTheme = (state) => state.app.configuration.theme;
export const getThemeName = (state) => 'getTheme(state).name';
export const getMapboxToken = (state) => 'state.index.configuration.mapboxToken';
export const getBottomRightButtons = (state) => 'state.index.configuration.bottomRightButtons';
export const getDataSuccess = (state) => state.app.loaded;
