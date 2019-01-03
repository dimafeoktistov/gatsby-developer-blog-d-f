import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Author.module.scss';
// import avatar from '../../../static/photos/1.jpg';
import Social from '../SocialNetworks/SocialNetworks';

const Author = ({ cv, avatar }) => {
  const mLeft = {
    marginLeft: 10,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Img fluid={avatar.childImageSharp.fluid} />
      </div>
      <div className={styles.description}>
        <h1>Feoktistov Dmitriy</h1>
        <p>JavaScript developer | Front-end web-development | Back-end web-development</p>
        <hr />
        <p>I am experiencied biologist and not too experiencied web-developer yet.</p>
        <p>
          Check out my
          {' '}
          <Link to="blog">blog</Link>
          {' '}
and my social networks to learn more!
        </p>
        <p>
          Also check out my
          {' '}
          <a href={cv}>cv</a>
!
        </p>
        <Social style={mLeft} />
      </div>
    </div>
  );
};

export default Author;
