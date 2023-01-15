import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { getToken, updateToken } from "../../services/auth/auth";
import Layout from "../../components/Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import DetailPage from "../../pages/DetailPage/DetailPage";

import LoginPage from "../../pages/LoginPage/LoginPage";
import AuthRouter from "../../components/AuthProtectedRouter/AuthProtectedRouter";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import "./App.module.scss";
import { AdminPage } from "../../pages/admin-page/admin-page";
import { AdminCommentsBlock } from "../../components/admin-comments-block/admin-comments-block";
import { AdminUsersBlock } from "../../components/admin-users-block/admin-users-block";
import { Page404 } from "../../pages/404/404";
import { ProfilePage } from "../../pages/ProfileChangePage/ProfileChangePage";

const App = () => {
  const [search, setSearch] = useSearchParams();
  const yandexCodeId = search.get("code");

  useEffect(() => {
    localStorage.getItem("refreshToken") && updateToken();
  }, []);

  useEffect(() => {
    yandexCodeId && getToken(yandexCodeId);
  }, [search]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<HomePage />} />
            <Route path="detail" element={<DetailPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="admin" element={<AdminPage />}>
              <Route index element={<AdminCommentsBlock />} />
              <Route path="users" element={<AdminUsersBlock />} />
            </Route>
          </Route>
          <Route element={<AuthRouter />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};


export default App;
