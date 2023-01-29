import React from "react";
import { block } from "bem-cn";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Layout.scss";

const cnStyles = block("Layout");

const Layout = () => {
  return (
    <>
      <Header />
      <main className={cnStyles()}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
