import { block } from 'bem-cn'; 
import Container from "../../components/Container/Container";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import "./admin-page.scss";

const cnStyles = block("AdminPage");

let activeStyle = {
  color: "black",
};

export const AdminPage = () => {
  if (!getCookie("status")) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <main className={cnStyles()}>
        <nav className={cnStyles("nav")}>
          <ul
            className={cnStyles("nav-list") + " " + cnStyles("nav-list-link")}
          >
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="users"
              >
                СТУДЕНТЫ
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                КОММЕНТАРИИ
              </NavLink>
            </li>
          </ul>
        </nav>

        <Outlet />
      </main>
    </Container>
  );
};
