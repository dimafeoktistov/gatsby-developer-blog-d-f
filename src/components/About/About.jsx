import React, { Component } from 'react';
import styles from './About.module.scss';

class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <h1 style={{ textAlign: 'center' }}>
          Hello! My name is Dima Feoktistov and I am javascript developer from Tomsk.
        </h1>
        <h2 style={{ textAlign: 'center' }}>Timeline</h2>
        <div>
          <p>
            I born and raised in Kurgan, which is small city near Ural mountains, Russia. At 2012 I
            graduated from Kurgan State University as a biologyst with specialization in botany. I
            always loved the nature and natural history, plants, animals and other living beings.
          </p>
          <p>
            At 2013 I entered Ph.D. studies at Tomsk State University. My major was a plant science
            with a bit of genetics. I studied phylogenetic relationships of Equisetaceae
            (horsetails) acient vascular plants. During my studies I worked with molecular biology
            methods, like sequencing, SSR (simple sequence repeats), ISSR (inter simple sequence
            repeats) and others.
          </p>
          <p>
            I know a bit of statistics. Mostly dimentional reducing methods (PCA, MDS, LDA) and
            clustering analysis (UPGMA, NJ). Also some molecular biology specific statistics like
            Bayesian Simmilarity, Maximum Likelyhood Analysis.
          </p>
        </div>
        <h2 style={{ textAlign: 'center' }}>Developer</h2>
        <div>
          I started studing web-development in the begining of 2018 and did not stop since that
          moment. My main
          {' '}
          <strong>skills</strong>
          {' '}
are:
          <ul>
            <li>HTML, CSS3, SCSS</li>
            <li>JavaScript (ES6, ES7), NodeJS</li>
            <li>TypeScript</li>
            <li>Front-end frameworks (ReactJS, Vue.js)</li>
            <li>React-Native</li>
            <li>REST API, GraphQL</li>
            <li>Backend frameworks: Express, NestJS</li>
          </ul>
        </div>
        <h2 style={{ textAlign: 'center' }}>Interests</h2>
        <div>
          My
          {' '}
          <strong>main interests</strong>
          {' '}
are growing as a developer, watching movies, hiking,
          plaing video games. I am interested in all kinds of remote and local work that is related
          to web-development. If you have any proposals you can drop me a message by a form at
          hire-me page or in any of social networks.
        </div>
      </div>
    );
  }
}

export default About;
