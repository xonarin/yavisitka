import React from "react";
import styles from './Logo.module.scss';
import logo from './logo.png';

const Logo = () => {
    return (
        <>
            <img className={styles.logo} src={logo} alt="Визитки" />
        </>
    )
}

export default Logo;