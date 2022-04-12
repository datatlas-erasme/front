import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { datalimentaire }  from './styles';
import { industries }  from './styles';

const Front = React.lazy(() => import('./components/index'));
const theme = process.env.REACT_APP_THEME === 'industries' ? industries : datalimentaire;

export default function App(instanceConf) {
  
  console.log(instanceConf)

  return (
    <ThemeProvider theme={theme}>
          <Routes>
              <Route
                path="*"
                element={
                  <React.Suspense fallback={null}>
                      <Front/>
                  </React.Suspense>
                }
              />
          </Routes>
    </ThemeProvider>
  );
};