import React from 'react';
import styles from './projectBtn.module.scss';

export default ({ children, style }) => (
  <button type="button" className={[styles.projectBtn, style].join(' ')}>
    {children}
  </button>
);
