import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document
        .querySelector('header')
        .classList.toggle('window-scroll', window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
