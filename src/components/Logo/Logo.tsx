import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/bem-css-module";
import styles from "./Logo.module.scss";
import logo from "./logo.svg";

const cnStyles = cn(styles, "Logo");

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img className={cnStyles()} src={logo} alt="Визитки" />
      </Link>
    </>
  );
};

export default Logo;
