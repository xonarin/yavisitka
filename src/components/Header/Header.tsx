import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import { cn } from "../../utils/bem-css-module";
import styles from './Header.module.scss';

const cnStyles = cn(styles, 'Header');

const Header = () => {
    return (
        <header className={cnStyles()}>
            <Container>
                <div className={cnStyles('wrap')}>
                    <Logo />
                    <Link to="/map">sdfsd</Link>
                </div>
            </Container>
        </header>
    )
}

export default Header;