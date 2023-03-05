import React from 'react';
import { useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/Home'));
const Demo = React.lazy(() => import('@/pages/Demo'));

const GetRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/demo', element: <Demo /> },
  ]);
  return routes;
};

export default GetRoutes;
