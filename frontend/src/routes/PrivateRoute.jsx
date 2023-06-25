import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { HOME_URL } from "./paths";

const Private = ({ children }) => {
  const token = localStorage.getItem('user');

  if (!token) {
    return <Navigate to={HOME_URL} replace />;
  }
  return children || <Outlet />;
};

export default Private;
