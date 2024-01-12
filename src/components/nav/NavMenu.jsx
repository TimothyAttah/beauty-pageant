import React from 'react';
import { NavLink } from 'react-router-dom';
// import {
//   RiBookReadFill,
//   RiHome2Line,
//   RiPriceTagFill,
//   RiShieldUserFill,
//   RiSuitcase3Line,
// } from 'react-icons/ri';
import * as Styles from './NavMenuStyles';

const navData = [
  {
    name: 'Home',
    // icon: <RiHome2Line />,
    to: '/',
  },
  {
    name: 'About',
    // icon: <RiPriceTagFill />,
    to: '/about',
  },
  {
    name: 'Contact',
    // icon: <RiSuitcase3Line />,
    to: '/contact-us',
  },
  {
    name: 'Gallery',
    // icon: <RiBookReadFill />,
    to: '/gallery',
  },
];

export const Nav = () => {
  const headerBg = () => {
    window.addEventListener('scroll', () => {
      document.querySelector('nav').classList.toggle('nav', window.scrollY > 0);
    });
  };

  headerBg();
  return (
    <Styles.NavMenuContainer className='nav'>
      {navData.map((item, i) => (
        <li key={i}>
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {/* <span>{item.icon}</span> */}
            <span>{item.name}</span>
          </NavLink>
        </li>
      ))}
      <Styles.Indicator></Styles.Indicator>
    </Styles.NavMenuContainer>
  );
};
