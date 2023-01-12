import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../../pages/LoginPage/LoginPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomePage from "../../pages/HomePage/HomePage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import UI from '../../pages/UI/UI';
import './App.module.scss';


const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/user' element={<DetailPage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/ui' element={<UI/>}/>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
