import React from 'react'
import Link from 'gatsby-link'
import styles from './Projects.module.scss'
import guideToTomskPng from '../../assets/photos/guide-to-tomsk.png'
import loanCalculator from '../../assets/photos/loan-calculator.png'
import arcadeGameClone from '../../assets/photos/arcade.png'

const Projects = () => {
  return (
    <section className={styles.featured} id="featured">
      <div className={styles.featuredContent}>
        <span>featured content</span>
        <h2>My projects</h2>
        <p>Here is a few examples of my front-end projects</p>
      </div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <img src={guideToTomskPng} alt="guide to Tomsk city" />
          <div className={styles.description}>
            <h3>Guide to Tomsk city</h3>
            <p>
              A small front-end only app that represents points of interests in
              Tomsk on google maps. It uses Google Maps API and Foursquare API.
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
              <Link to="page-2" className={styles.projectBtn}>
                More info
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src={loanCalculator}
            alt="screenshot of loan calculator project"
          />
          <h3>Loan calculator</h3>
          <p>
            Calculator of loan percentages. Vanilla javascript and Bootstrap.
          </p>
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
          <img src={arcadeGameClone} alt="clone of classic arcade game" />
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
  )
}

export default Projects
