import React from "react";
import { Routes, Route } from "react-router";
import Login from "../../pages/LoginPage/LoginPage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import UI from "../../pages/UI/UI";
import "./App.module.scss";
import { AdminPage } from "../../pages/admin-page/admin-page";
import { Page404 } from "../../pages/404/404";
import { AdminCommentsBlock } from "../../components/admin-comments-block/admin-comments-block";
import { AdminUsersBlock } from "../../components/admin-users-block/admin-users-block";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="ui" element={<UI />} />
        <Route path="admin" element={<AdminPage />}>
          <Route index element={<AdminCommentsBlock />} />
          <Route path="users" element={<AdminUsersBlock />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
