import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import MiniProfile from "../../components/MiniProfile/MiniProfile";
import { getCookie, setCookie, deleteCookie } from "../../utils/cookie";
import { cn } from "../../utils/bem-css-module";
import styles from './Header.module.scss';

const cnStyles = cn(styles, "Header");

const Header = () => {
  const status = getCookie('status') ? 'admin' : 'user'
  const auth = getCookie('token');


  const handleClickAdmin = () => {
    setCookie('status', 'admin' , { secure: true, 'max-age': 360000 });
    window.location.reload();
  }
  
  const handleClickUser = () => {
    setCookie('status', 'admin' , { secure: true, 'max-age': -1 });
    window.location.reload();
  }

  return (
    <header className={cnStyles()}>
      <Container>
        <div className={cnStyles("wrap")}>
          <Logo />
          <nav>
            <NavLink to="/">HOME | </NavLink>
            <NavLink to="/detail">DETAIL | </NavLink>
            <NavLink to="/profile">PROFILE |</NavLink>
            <NavLink to="/admin">ADMIN | </NavLink>
            <NavLink to="/map">MAPS | </NavLink>
            <NavLink to="/demo">DEMO | </NavLink>
          </nav>

          Ваш статус: ({status}):
          <button type="button" onClick={handleClickUser}>Студент</button>
          <button type="button" onClick={handleClickAdmin}>Админ</button>

          {auth && 
              <MiniProfile />
          }
        </div>
      </Container>
    </header>
  );
};

export default Header;

