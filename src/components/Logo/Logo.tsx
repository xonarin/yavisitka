import React from "react";
import { cn } from "../../utils/bem-css-module";
import styles from './Logo.module.scss';
import logo from './logo.png';

const cnStyles = cn(styles, 'Logo');

const Logo = () => {
    return (
        <>
            <img className={cnStyles()} src={logo} alt="Визитки" />
        </>
    )
}

export default Logo;