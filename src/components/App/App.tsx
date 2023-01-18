import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import { getToken, updateToken } from "../../services/auth/auth";
import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../../components/Layout/Layout";
import MapsPage from "../../pages/MapsPage/MapsPage";
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import DetailPage from "../../pages/DetailPage/DetailPage";
import { AdminPage } from "../../pages/admin-page/admin-page";
import { AdminCommentsBlock } from "../../components/admin-comments-block/admin-comments-block";
import { AdminUsersBlock } from "../../components/admin-users-block/admin-users-block";
import { Page404 } from "../../pages/404/404";
import { ProfilePage } from "../../pages/ProfileChangePage/ProfileChangePage";
import { getCookie } from "../../utils/cookie";
import './App.module.scss';

const App = () => {
  const [search, setSearch] = useSearchParams();
  const yandexCodeId = search.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("refreshToken") && updateToken();
    setTimeout(() => {
      if (yandexCodeId && getCookie('token')) {
          navigate("/", {state: location.pathname});
        }
    }, 1000);
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
            <Route path="map" element={<MapsPage />} />
            <Route path="admin" element={<AdminPage />}>
              <Route index element={<AdminCommentsBlock />} />
              <Route path="users" element={<AdminUsersBlock />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
        </>
    )
}

export default App;