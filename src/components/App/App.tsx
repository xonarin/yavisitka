import React, { useEffect } from 'react';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import Login from '../../pages/LoginPage/LoginPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomePage from "../../pages/HomePage/HomePage";
import UI from '../../pages/UI/UI';
import { getToken } from '../../services/auth/auth';
import './App.module.scss';



const App = () => {
    const [search, setSearch] = useSearchParams();
    const yandexCodeId = search.get('code');

    useEffect(() => {
        console.log(yandexCodeId)
        yandexCodeId && getToken(yandexCodeId);
      }, [])

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/ui' element={<UI/>}/>
                <Route path='/home' element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
