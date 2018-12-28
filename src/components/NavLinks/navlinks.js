import React from 'react';
import styles from './navlinks.module.scss';
import Navlink from './NavLink/Navlink';

const Navlinks = ({ clicked }) => (
  <ul className={styles.navigation}>
    <Navlink to="/" clicked={clicked}>
        Home
    </Navlink>
    <Navlink to="/about" clicked={clicked}>
        About
    </Navlink>
    <Navlink to="/hire-me" clicked={clicked}>
        Hire me
    </Navlink>
    <Navlink to="/blog">
      Blog
    </Navlink>
  </ul>
);

export default Navlinks;
