import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { addDataToMap, loadMapStyles, loadMapStyleErr } from 'erasme-kepler.gl/actions';
import { industries, GlobalStyle } from './styles';
// import useInstanceConfiguration from './hooks/useInstanceConfiguration';
import { ViewportProvider } from './utils/ViewportConext';
import Loader from './components/Loader';
import { fetchInstanceConfig, fetchKeplerConfig, setInstanceConfiguration } from './api/fetchData';
import { getLayers } from './store/kepler/selectors';
import { testState } from './store/app/selectors';

const Map = React.lazy(() => import('./components/map'));
const PanelControl = React.lazy(() => import('./components/panel-control'));

export default function App() {
  const dispatch = useDispatch();
  const setTestState = useSelector(testState);
  const themeSelect = useSelector(getLayers);

  console.log(setTestState);

  useEffect(() => {
    fetchInstanceConfig();
    fetchKeplerConfig();
    setInstanceConfiguration();
  }, []);

  const theme = industries;

  // const theme = instanceConfiguration?.theme?.name === 'industries' ? industries : datalimentaire;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <ViewportProvider>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Suspense fallback={<Loader />}>
                  <Map />
                  <PanelControl />
                </Suspense>
              </>
            }
          />
        </Routes>
      </ViewportProvider>
    </ThemeProvider>
  );
}
