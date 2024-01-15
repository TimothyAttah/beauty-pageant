import React from 'react';
import nicaLogo from '../../assets/nicaLogo.png';
// import logo from '../../assets/logo.jpg';
import { FadeIn } from '../fadeIn/FadeIn';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../../styles/globalStyles';
import * as Styles from './HeaderStyles';
import { FaBars } from 'react-icons/fa';
import { Button } from '../button/HeaderButton';

export const Header = () => {
  return (
    <Styles.MainHeaderContainer>
      <Container primary>
        <Styles.HeaderLogo>
          <Link to='/'>
            <img src={nicaLogo} alt='logo' />
          </Link>
        </Styles.HeaderLogo>
        <Styles.HeaderNavWrapper>
          <ul>
            <NavLink to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink to='about'>
              <li>About</li>
            </NavLink>
            <NavLink to='/contact'>
              <li>Contact</li>
            </NavLink>
            <NavLink to='/gallery'>
              <li>Gallery</li>
            </NavLink>
          </ul>
        </Styles.HeaderNavWrapper>
        <Styles.DivWrapper>
          <Styles.HeaderBtn>
            <Button to='/login'>Login</Button>
            <Button to='/register'>Register</Button>
          </Styles.HeaderBtn>
          <Styles.FaBarsBox>
            <FaBars />
          </Styles.FaBarsBox>
        </Styles.DivWrapper>
      </Container>
    </Styles.MainHeaderContainer>
  );
};
