import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Back = React.lazy(() => import('./Back'));
const Front = React.lazy(() => import('./Front'));
document.title = "Canographia"
const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
