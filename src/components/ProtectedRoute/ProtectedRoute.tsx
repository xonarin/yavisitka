import { Outlet } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import AuthRouter from "../../components/AuthProtectedRouter/AuthProtectedRouter";

const ProtectedRoute = () => {
  return getCookie("token") ? <Outlet /> : <AuthRouter />;
};

export default ProtectedRoute;
