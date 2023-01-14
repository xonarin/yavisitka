// @import "../../assets/styles/vars.scss";

import React from "react";
import styles from "./admin-page.module.scss";
import { cn } from "../../utils/bem-css-module";
import Container from "../../components/Container/Container";
import { NavLink, Outlet } from "react-router-dom";

const cnStyles = cn(styles, "AdminPage");

let activeStyle = {
  color: "black",
};
console.log(cnStyles() + "   1");

export const AdminPage = () => {
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
