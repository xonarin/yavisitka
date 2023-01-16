import React, { useEffect } from 'react';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import { getToken, updateToken } from '../../services/auth/auth';
import Layout from '../../components/Layout/Layout';
import HomePage from "../../pages/HomePage/HomePage";
import MapsPage from "../../pages/MapsPage/MapsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Demo from "../../pages/UI/UI";
import AuthRouter from '../../components/AuthProtectedRouter/AuthProtectedRouter';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import './App.module.scss';



const App = () => {
    const [search, setSearch] = useSearchParams();
    const yandexCodeId = search.get('code');
    
    useEffect(() => {
        localStorage.getItem("refreshToken") && updateToken();
      }, [])

    useEffect(() => {
        yandexCodeId && getToken(yandexCodeId);
      }, [search])


    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<ProtectedRoute children={<HomePage />} />} />
                    <Route path="map" element={<ProtectedRoute children={<MapsPage />} />} />
                    <Route element={<AuthRouter />}>
                        <Route path='/login' element={<LoginPage />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App;
