import React from 'react';
import styles from './paginationBtn.module.scss';

export default ({ children, style }) => (
  <button type="button" className={styles.btn}>
    {children}
  </button>
);
