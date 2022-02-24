import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { datalimentaire }  from './assets/styles';

const Front = React.lazy(() => import('./components/index'));

export default function App() {
  return (
    <ThemeProvider theme={datalimentaire}>
          <Routes>
              <Route
                path="*"
                element={
                  <React.Suspense fallback={null}>
                    <Front />
                  </React.Suspense>
                }
              />
          </Routes>
    </ThemeProvider>
  );
};