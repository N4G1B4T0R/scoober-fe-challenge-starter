import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUsernameSelector } from 'shared/services/auth/selector';
export const AuthLayout = () => {
  const username = useSelector(getUsernameSelector);

  if (!username) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};
