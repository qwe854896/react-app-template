import React, { Suspense } from 'react';
import { BrowserRouter, Routes, useRoutes } from 'react-router-dom';

import './App.css';

import GetRoutes from '@/routes/config';

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <BrowserRouter>
        <GetRoutes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
