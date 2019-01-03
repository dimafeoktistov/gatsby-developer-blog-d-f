import React from 'react';
import Img from 'gatsby-image';
import styles from './hero.module.scss';
import arrow from '../../../static/photos/arrow.png';
import Author from '../AuthourPanel/Author';

const Hero = ({ cv, avatar, bg }) => (
  <div className={styles.hero}>
    <Img
      fluid={bg.childImageSharp.fluid}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: '-1',
      }}
    />
    <Author cv={cv} avatar={avatar} />
    <div className={styles.arrow}>
      <a href="#featured" className={styles.arrowdown}>
        <img src={arrow} alt="down arrow" />
      </a>
    </div>
  </div>
);

export default Hero;
