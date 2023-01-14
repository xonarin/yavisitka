import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import { cn } from "../../utils/bem-css-module";
import styles from "./Header.module.scss";

const cnStyles = cn(styles, "Header");

const Header = () => {
  return (
    <header className={cnStyles()}>
      <Container>
        <div className={cnStyles("wrap")}>
          <Logo />
          <nav>
            <NavLink to="/">Главная | </NavLink>
            <NavLink to="/login">Вход | </NavLink>
            <NavLink to="/admin">Админ Главная | </NavLink>
            <NavLink to="/admin/users">Админ Юзерс</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
