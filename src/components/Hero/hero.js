import React from 'react';
import styles from './hero.module.scss';
import arrow from '../../../static/photos/arrow.png';
import Author from '../AuthourPanel/Author';

const Hero = ({ cv }) => (
  <div className={styles.hero}>
    <Author cv={cv} />
    <div className={styles.arrow}>
      <a href="#featured" className={styles.arrowdown}>
        <img src={arrow} alt="down arrow" />
      </a>
    </div>
  </div>
);

export default Hero;
