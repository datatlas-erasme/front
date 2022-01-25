import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { datalimentaire, Style }  from './utils/styles';

const Front = React.lazy(() => import('./components/index'));

export default function App() {
  return (
    <ThemeProvider theme={datalimentaire}>
      <Router>
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
      </Router>
    </ThemeProvider>
  );
};