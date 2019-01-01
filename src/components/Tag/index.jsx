import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import styles from './tag.module.scss';

const Tag = ({ tag }) => (
  <Link className={styles.link} to={`/tags/${_.kebabCase(tag)}`}>
    <button type="button" className={styles.tag}>
      {tag}
    </button>
  </Link>
);

export default Tag;
