import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { datalimentaire, industries, GlobalStyle } from './styles';
import useInstanceConfiguration from './hooks/useInstanceConfiguration';
import { ViewportProvider } from './utils/ViewportConext';
import Loader from './components/Loader';

const Map = React.lazy(() => import('./components/map'));
const PanelControl = React.lazy(() => import('./components/panel-control'));

export default function App() {
  const instanceConfiguration = useInstanceConfiguration();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(instanceConfiguration);
  // }, [dispatch]);
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
