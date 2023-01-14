import React from "react";
import styles from "./admin-page.module.scss";
import { cn } from "../../utils/bem-css-module";
import Container from "../../components/Container/Container";
import {
  NavLink,
  Link,
  Outlet,
  redirect,
  Route,
  Routes,
} from "react-router-dom";

const cnStyles = cn(styles, "HomePage");
let activeStyle = {
  textDecoration: "underline",
  color: "red",
  fontWeight: "bold",
};

export const AdminPage = () => {
  return (
    <Container>
      <p> Тут будет AdminPage</p>

      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="users"
      >
        СТУДЕНТЫ
      </NavLink>

      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to=""
        end
      >
        КОММЕНТАРИИ
      </NavLink>

      <Outlet />
    </Container>
  );
};
