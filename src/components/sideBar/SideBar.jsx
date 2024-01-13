import React from 'react';
import * as Styles from './SideBarStyles';
import { NavLink } from '../navlink/NavLink';

const showAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const navData = [
  {
    name: 'Home',
    // icon: <RiHome2Line />,
    to: 'home',
  },
  {
    name: 'About',
    // icon: <RiPriceTagFill />,
    to: 'about',
  },
  {
    name: 'Contact',
    // icon: <RiSuitcase3Line />,
    to: 'contact',
  },
  {
    name: 'Gallery',
    // icon: <RiBookReadFill />,
    to: 'gallery',
  },
];

export const SideBar = ({ setMenuClass }) => {
  return (
    <Styles.SideBar
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Styles.SideBarNavLinks>
        {navData.map((item, i) => (
          <NavLink to={item.to} key={i} onClick={() => setMenuClass(false)}>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </Styles.SideBarNavLinks>
    </Styles.SideBar>
  );
};
