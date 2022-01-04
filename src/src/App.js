import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          </Routes>
      </Router>
    
  );
};