import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { datalimentaire }  from './styles';
import { industries }  from './styles';

const Front = React.lazy(() => import('./components/index'));

export default function App({instanceConf}) {
  const theme = instanceConf?.theme?.name === 'Industries' ? industries : datalimentaire;

  return (
    <ThemeProvider theme={theme}>
          <Routes>
              <Route
                path="*"
                element={
                  <React.Suspense fallback={null}>
                      <Front theme={theme} instanceConf={instanceConf}/>
                  </React.Suspense>
                }
              />
          </Routes>
    </ThemeProvider>
  );
};