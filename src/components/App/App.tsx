import React, { useEffect } from 'react';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import { getToken, updateToken } from '../../services/auth/auth';
import Layout from '../../components/Layout/Layout';
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
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
                    <Route element={<ProtectedRoute />}>
                        <Route index element={<HomePage />} />
                    </Route>
                    <Route element={<AuthRouter />}>
                        <Route path='/login' element={<LoginPage />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App;
