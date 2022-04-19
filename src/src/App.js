import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { datalimentaire }  from './styles';
import { industries }  from './styles';

const Front = React.lazy(() => import('./components/index'));

export default function App({instance}) {
  const theme = instance.conf?.theme?.name === 'Industries' ? industries : datalimentaire;

  return (
    <ThemeProvider theme={theme}>
          <Routes>
              <Route
                path="*"
                element={
                  <Suspense fallback={null}>
                      <Front theme={theme} instance={instance} />
                  </Suspense>
                }
              />
          </Routes>
    </ThemeProvider>
  );
};