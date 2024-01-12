import React from 'react';
import * as Styles from './SideBarStyles';
import { Link } from 'react-router-dom';

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

export const SideBar = ({ setMenuClass }) => {
  return (
    <Styles.SideBar
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Styles.SideBarNavLinks>
        <Link to='/' onClick={() => setMenuClass()}>
          Home
        </Link>
        <Link to='/aircrafts-for-sale' onClick={() => setMenuClass()}>
          Aircraft
        </Link>
        <Link to='/' onClick={() => setMenuClass()}>
          About
        </Link>
      </Styles.SideBarNavLinks>
    </Styles.SideBar>
  );
};
