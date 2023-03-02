import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import ViteReact from '@/pages/ViteReact';

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router>
        <Routes>
          <Route key="/vite-react" path="/" element={<ViteReact />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
