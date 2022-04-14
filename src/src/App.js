import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { datalimentaire }  from './styles';

const Front = React.lazy(() => import('./components/index'));

export default function App() {
  return (
    <ThemeProvider theme={datalimentaire}>
          <Routes>
              <Route
                path="*"
                element={
                  <Suspense fallback={null}>
                    <Front />
                  </Suspense>
                }
              />
          </Routes>
    </ThemeProvider>
  );
};