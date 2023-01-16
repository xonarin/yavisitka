import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { getToken, updateToken } from "../../services/auth/auth";
import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../../components/Layout/Layout";
import MapsPage from "../../pages/MapsPage/MapsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import AuthRouter from '../../components/AuthProtectedRouter/AuthProtectedRouter';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import DetailPage from "../../pages/DetailPage/DetailPage";
import { AdminPage } from "../../pages/admin-page/admin-page";
import { AdminCommentsBlock } from "../../components/admin-comments-block/admin-comments-block";
import { AdminUsersBlock } from "../../components/admin-users-block/admin-users-block";
import { Page404 } from "../../pages/404/404";
import { ProfilePage } from "../../pages/ProfileChangePage/ProfileChangePage";
import './App.module.scss';

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
                    <Route index element={<ProtectedRoute children={<HomePage />} />} />
                    <Route path="detail" element={<ProtectedRoute children={<DetailPage />} />} />
                    <Route path="profile" element={<ProtectedRoute children={<ProfilePage />} />} />
                    <Route path="admin" element={
                      <ProtectedRoute>
                        <Routes>
                            <Route index element={<AdminCommentsBlock />} />
                            <Route path="users" element={<AdminUsersBlock />} />
                          </Routes>
                      </ProtectedRoute>
                    }>
                    </Route>
                    <Route path="map" element={<ProtectedRoute children={<MapsPage />} />} />
                    <Route element={<AuthRouter />}>
                        <Route path='/login' element={<LoginPage />} />
                    </Route>
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    )
}

export default App;
