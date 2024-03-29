import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { datalimentaire, industries, GlobalStyle } from './styles';
import useInstanceConfiguration from './hooks/useInstanceConfiguration';
import { ViewportProvider } from './utils/ViewportConext';
import Loader from './components/Loader';

const Map = React.lazy(() => import('./components/map'));
const PanelControl = React.lazy(() => import('./components/panel-control'));

export default function App() {
  const instanceConfiguration = useInstanceConfiguration();

  if (!instanceConfiguration) {
    return <Loader />;
  }

  const theme = instanceConfiguration?.theme?.name === 'industries' ? industries : datalimentaire;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <ViewportProvider>
        <Routes>
          <Route
            path="*"
            element={
              <>
                {/* {theme === datalimentaire ? : null} */}
                <Map />
                <PanelControl />
              </>
            }
          />
        </Routes>
      </ViewportProvider>
    </ThemeProvider>
  );
}
