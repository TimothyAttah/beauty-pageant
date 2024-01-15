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
          <FadeIn delay={0.2} direction='down'>
            <Link to='/'>
              <img src={nicaLogo} alt='logo' />
            </Link>
          </FadeIn>
        </Styles.HeaderLogo>
        <Styles.HeaderNavWrapper>
          <FadeIn delay={0.3} direction='down'>
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
          </FadeIn>
        </Styles.HeaderNavWrapper>
        <Styles.DivWrapper>
          <FadeIn delay={0.4} direction='down'>
            <Styles.HeaderBtn>
              <Button to='/login'>Login</Button>
              <Button to='/register'>Register</Button>
            </Styles.HeaderBtn>
            <Styles.FaBarsBox>
              <FaBars />
            </Styles.FaBarsBox>
          </FadeIn>
        </Styles.DivWrapper>
      </Container>
    </Styles.MainHeaderContainer>
  );
};
