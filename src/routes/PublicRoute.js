import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DASHBOARD_HOME_URL } from "./paths";

const Public = ({ children }) => {
  const userEmail = localStorage.getItem('user');

  if (userEmail) {
    return <Navigate to={DASHBOARD_HOME_URL} replace />;
  }
  return children || <Outlet />;
};

export default Public;
