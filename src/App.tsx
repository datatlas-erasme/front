import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { datalimentaire, industries, Style } from './styles';
import useInstanceConfiguration from './hooks/useInstanceConfiguration';
import { ViewportProvider } from './utils/ViewportConext';
import Loader from './components/Loader';

const Map = React.lazy(() => import('./components/map'));
const Panel = React.lazy(() => import('./components/panel'));

export default function App() {
  const instanceConfiguration = useInstanceConfiguration();

  if (!instanceConfiguration) {
    return <Loader />;
  }

  const theme = instanceConfiguration?.theme?.name === 'Industries' ? industries : datalimentaire;

  return (
    <ThemeProvider theme={theme}>
      <Style theme={theme} />
      <ViewportProvider>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Map />
                <Panel />
              </>
            }
          />
        </Routes>
      </ViewportProvider>
    </ThemeProvider>
  );
}
