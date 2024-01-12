import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import { Container } from '../../styles/globalStyles';
import logo from '../../assets/nica2.png';
import { Nav } from '../nav/NavMenu';
import { Link } from 'react-router-dom';

export const Header = () => {
  const headerBg = () => {
    window.addEventListener('scroll', () => {
      document
        .querySelector('header')
        .classList.toggle('bg-reveal', window.scrollY > 0);
    });
  };

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

  headerBg();
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
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
        <div className='burger-menu' onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </Container>
    </Styles.MainHeaderContainer>
  );
};
