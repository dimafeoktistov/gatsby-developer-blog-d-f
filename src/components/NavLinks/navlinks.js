import React from 'react';
import { FaHome, FaEnvelope, FaUser, FaBook } from 'react-icons/fa';
import styles from './navlinks.module.scss';
import Navlink from './NavLink/Navlink';

const Navlinks = ({ clicked }) => (
  <ul className={styles.navigation}>
    <Navlink to="/" clicked={clicked}>
      <FaHome />
      Home
    </Navlink>
    <Navlink to="/about/" clicked={clicked}>
      <FaUser />
      About
    </Navlink>
    <Navlink to="/hire-me/" clicked={clicked}>
      <FaEnvelope />
      Hire me
    </Navlink>
    <Navlink to="/blog/">
      <FaBook />
      Blog
    </Navlink>
  </ul>
);

export default Navlinks;
