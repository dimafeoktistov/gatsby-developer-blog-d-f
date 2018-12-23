import React from 'react'
import styles from './hero.module.scss'
import arrow from '../../assets/photos/arrow.png'
import Author from '../AuthourPanel/Author'

const Hero = props => {
  return (
    <div className={styles.hero}>
      <Author />
      <div className={styles.arrow}>
        <a href="#featured" className={styles.arrowdown}>
          <img src={arrow} alt="down arrow" />
        </a>
      </div>
    </div>
  )
}

export default Hero
