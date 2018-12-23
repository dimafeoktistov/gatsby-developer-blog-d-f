import React from 'react'
import Link from 'gatsby-link';
import styles from './Author.module.scss'
import avatar from '../../assets/photos/1.jpg'
import Social from '../SocialNetworks/SocialNetworks'

const Author = () => {
  const mLeft = {
    marginLeft: 10,
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src={avatar} alt="website authour avatar" />
      </div>
      <div className={styles.description}>
        <h1>Feoktistov Dmitriy</h1>
        <p>JavaScript developer | Front-end web-development | Back-end web-development</p>
        <hr />
        <p>
          I am experiencied biologist and not too experiencied web-developer
          yet.
        </p>
        <p>Check out my <Link to='blog'>blog</Link> and my social networks to learn more!</p>
        <Social style={mLeft} />
      </div>
    </div>
  )
}

export default Author
