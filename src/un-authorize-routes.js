import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const UnAuthorizedWrapper = () => {
  const auth = sessionStorage.getItem('token');
  return auth ? <Navigate to='/' /> : <Outlet />;
};
