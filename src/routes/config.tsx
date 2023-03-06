import React from 'react';
import { useRoutes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';

const Home = React.lazy(() => import('@/pages/Home'));
const Demo = React.lazy(() => import('@/pages/Demo'));
const Login = React.lazy(() => import('@/pages/Auth/Login'));
const Register = React.lazy(() => import('@/pages/Auth/Register'));

const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/demo', element: <Demo /> },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: '/auth/login', element: <Login /> },
        { path: '/auth/register', element: <Register /> },
      ],
    },
  ]);
  return routes;
};

export default GetRoutes;
