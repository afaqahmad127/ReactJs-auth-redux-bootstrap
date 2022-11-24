import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthorizeWrapper = () => {
  const auth = sessionStorage.getItem('token');
  return auth ? <Outlet /> : <Navigate to='/signin' />;
};
