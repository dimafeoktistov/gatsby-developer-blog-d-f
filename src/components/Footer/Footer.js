import React from 'react'
import Social from '../SocialNetworks/SocialNetworks'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={styles.copy}>
        <div className={styles.copyright}>
          Copyright &copy; 2018 Dima Feoktistov
        </div>
        <Social />
      </div>
    </footer>
  )
}

export default Footer
