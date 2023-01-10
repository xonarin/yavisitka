import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/HomePage/HomePage';
import UI from '../../pages/UI/UI';
import './App.scss';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ui' element={<UI/>} />
      </Routes>
    </>
  )
}

export default App;
