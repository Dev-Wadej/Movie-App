import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { totalRoutes } from './routes';
import { PaginateProvider } from './hooks/usePaginate';

import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <PaginateProvider>
      <Suspense
        fallback={
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigation />}>
            {totalRoutes.map((route, idx) => (
              <Route
                index={route.index?.index}
                key={idx}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </PaginateProvider>
  );
}

export default App;
