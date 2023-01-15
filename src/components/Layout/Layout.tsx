import React from "react";
import {cn} from "../../utils/bem-css-module";
import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Layout.module.scss';

const cnStyles = cn(styles, 'Layout');


const Layout = () => {
    return (
        <>
            <Header />
                <main className={cnStyles()}>
                    <Outlet />
                </main>
            <Footer />
        </>

    )
}

export default Layout;