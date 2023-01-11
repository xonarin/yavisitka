import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/LoginPage/LoginPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UI from '../../pages/UI/UI';
import './App.module.scss';


const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/ui' element={<UI/>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;
