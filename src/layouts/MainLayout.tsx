import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
