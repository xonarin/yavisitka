// @import "../../assets/styles/vars.scss";

import React from "react";
import styles from "./admin-page.module.scss";
import { cn } from "../../utils/bem-css-module";
import Container from "../../components/Container/Container";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

const cnStyles = cn(styles, "AdminPage");

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
