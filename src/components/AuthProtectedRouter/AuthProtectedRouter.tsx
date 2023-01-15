import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

const AuthRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    /* TODO: Без сеттаймаут редирект происходит только на 2 раз, так как компонент не видит куку новую */

      setTimeout(() => {
        if (getCookie('token')) {
            navigate("/", {state: location.pathname});
          }
      }, 1000);

  }, [navigate]);

  return <Outlet />;
}

export default AuthRouter;