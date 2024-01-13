import React from 'react';
import { Hero } from '../hero/Hero';
import { About } from '../about/About';
import { Contact } from '../contact/Contact';
import { Gallery } from '../../components/gallery/Gallery';
// import * as Styles from './HomeStyles';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Contact />
      <Gallery />
    </div>
  );
};

export default Home;
