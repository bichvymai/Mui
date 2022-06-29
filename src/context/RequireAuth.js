import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  console.log(location);
  if (!auth.name) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
