import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Footer } from './components/footer/Footer';

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
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/contact' element={<Home />} />
          <Route path='/gallery' element={<Home />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
