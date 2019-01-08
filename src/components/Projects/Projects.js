import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Projects.module.scss';

const Projects = ({ images }) => (
  <section className={styles.featured} id="featured">
    <div className={styles.featuredContent}>
      <span>featured content</span>
      <h2>My projects</h2>
      <p>Here is a few examples of my front-end projects</p>
    </div>
    <div className={styles.projects}>
      <div className={styles.project}>
        <div style={{ width: '100%', height: 'auto' }}>
          <Img fluid={images.tomskMap.childImageSharp.fluid} />
        </div>
        <div className={styles.description}>
          <h3>Guide to Tomsk city</h3>
          <p>
            A small front-end only app that represents points of interests in Tomsk on google maps.
            It uses Google Maps API and Foursquare API.
          </p>
          <p>
            <a
              href="https://udacity-neibourhood-map.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectBtn}
            >
              Go!
            </a>
            <Link to="blog/tomsk-map" className={styles.projectBtn}>
              More info
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.project}>
        <div style={{ width: '100%', height: 'auto' }}>
          <Img fluid={images.loan.childImageSharp.fluid} />
        </div>
        <h3>Loan calculator</h3>
        <p>Calculator of loan percentages. Vanilla javascript and Bootstrap.</p>
        <p>
          <a
            href="https://dimafeoktistov.github.io/loancalculator/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectBtn}
          >
            Go!
          </a>
        </p>
      </div>
      <div className={styles.project}>
        <div style={{ width: '100%', height: 'auto' }}>
          <Img fluid={images.arcade.childImageSharp.fluid} />
        </div>
        <h3>Clone of classic arcade game</h3>
        <p>Made on canvas, Vanilla javascript, Bootstrap.</p>
        <p>
          <a
            href="https://dimafeoktistov.github.io/arcade-game-clone/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectBtn}
          >
            Go!
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
