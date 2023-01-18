import React, { useEffect } from "react";
import {Outlet, useNavigate, useLocation} from "react-router-dom";
import { getCookie } from "../../utils/cookie";

const ProtectedRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (!getCookie('token')) {
      navigate("/login", {state: location.pathname});
    }
  }, [navigate, location]);

  return <Outlet />;
}

export default ProtectedRoute;