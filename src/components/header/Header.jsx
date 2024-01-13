import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import { Container } from '../../styles/globalStyles';
import logo from '../../assets/nica2.png';
import { Nav } from '../nav/NavMenu';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SideBar } from '../sideBar/SideBar';

export const Header = () => {
  const headerBg = () => {
    window.addEventListener('scroll', () => {
      document
        .querySelector('header')
        .classList.toggle('bg-reveal', window.scrollY > 0);
    });
  };

  headerBg();

  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
  const [menuClass, setMenuClass] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass(true);
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass(false);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <Styles.MainHeaderContainer className='header'>
      <Container primary>
        <Styles.HeaderLogo>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </Styles.HeaderLogo>
        <div>
          <Nav />
        </div>
        <Styles.HeaderBtn>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </Styles.HeaderBtn>
        <div className='burger-menu' onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </Container>
      <AnimatePresence>
        {menuClass && <SideBar setMenuClass={updateMenu} />}
      </AnimatePresence>
    </Styles.MainHeaderContainer>
  );
};
