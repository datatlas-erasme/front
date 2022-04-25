import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { datalimentaire }  from './styles';
import { industries }  from './styles';
import { useAPI } from './providers/ConfProvider';

const Front = React.lazy(() => import('./components/index'));

export default function App(props) {
  const {instance} = useAPI();
  console.log(instance)
  const theme = industries;
  //instance={{conf : instanceConf, datalayers: dataLayers, keplerConf: keplerConf }}
  
  return (
    <ThemeProvider theme={theme}>
          <Routes>
              <Route
                path="*"
                element={
                  <React.Suspense fallback={null}>
                      <Front instance={instance} />
                  </React.Suspense>
                }
              />
          </Routes>
    </ThemeProvider>
  );
};