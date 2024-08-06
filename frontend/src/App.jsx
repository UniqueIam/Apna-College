import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path='/' element={<Header />} />
      </Routes>
    </>
  )
}

export default App
