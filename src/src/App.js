import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Back = React.lazy(() => import('./Back'));
const Front = React.lazy(() => import('./Front'));

export default function App() {
  return (

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
              <Route
                path="/back"
                element={
                  <React.Suspense fallback={null}>
                    <Back />
                  </React.Suspense>
                }
              />
          </Routes>
      </Router>
    
  );
};