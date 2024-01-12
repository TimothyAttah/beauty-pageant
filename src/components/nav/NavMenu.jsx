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
    name: 'For Sell',
    // icon: <RiPriceTagFill />,
    to: '/for-sell',
  },
  {
    name: 'For Rent',
    // icon: <RiSuitcase3Line />,
    to: '/for-rent',
  },
  {
    name: 'About',
    // icon: <RiBookReadFill />,
    to: '/about',
  },
  {
    name: 'Contact',
    // icon: <RiShieldUserFill />,
    to: '/contact',
  },
];

export const NavMenu = () => {
  return (
    <Styles.NavMenuContainer>
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
