import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Login } from 'pages/login';
import { AuthLayout } from 'entities/auth-provider';

const lazyLoadRoutes = (path: string) => {
  const LazyElement = lazy(() => import(`pages/${path}`));

  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  );
};

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: lazyLoadRoutes('error'),
    children: [
      { index: true, element: <Navigate to="/dashboard" replace={true} /> },
      {
        path: 'dashboard',
        element: <AuthLayout />,
        children: [{ index: true, element: lazyLoadRoutes('dashboard') }]
      },
      {
        path: 'auth',
        element: <Login />
      },
      {
        path: 'error',
        element: lazyLoadRoutes('error')
      }
    ]
  },
  { path: '*', element: <Navigate to="/error" replace={true} /> }
]);
