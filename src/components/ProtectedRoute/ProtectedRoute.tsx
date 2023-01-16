import React, { FC, useEffect } from "react";
import {Outlet, Navigate, useLocation} from "react-router-dom";
import { getCookie } from "../../utils/cookie";

interface ProtectedRouteProps {
  children: React.ReactElement
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({children}) => {
  const location = useLocation();

    if (!getCookie('token')) {
      return <Navigate to="/login" state={{from: location}} />;
    }

  return children;
}

export default ProtectedRoute;