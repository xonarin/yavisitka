import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import MiniProfile from "../../components/MiniProfile/MiniProfile";
import { getCookie } from "../../utils/cookie";
import { cn } from "../../utils/bem-css-module";
import styles from './Header.module.scss';

const cnStyles = cn(styles, "Header");

const Header = () => {
  const auth = getCookie('token');

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
            {/* <NavLink to="/admin/users">Админ Юзерс</NavLink> */}
          </nav>

          {auth && 
              <MiniProfile />
          }
        </div>
      </Container>
    </header>
  );
};

export default Header;

