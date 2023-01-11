import React from "react";
import { cn } from "../../utils/bem-css-module";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import LinkEntry from "../../components/LinkEntry/LinkEntry";
import Footer from "../../components/Footer/Footer";
import styles from './LoginPage.module.scss';

const cnStyles = cn(styles, 'LoginPage');

const Home = () => {
    return (
        <>
            <main className={cnStyles()}>
                <Container>
                    <div className={cnStyles('container')}>
                        <h1 className={cnStyles('title')}>C кем я учусь?</h1>
                        <LinkEntry />
                    </div>
                </Container>
            </main>
        </>
    )
}

export default Home;