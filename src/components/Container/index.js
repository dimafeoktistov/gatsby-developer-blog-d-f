import React from 'react';
import styles from './container.module.scss';

export default ({ children, style }) => <div className={[styles.container]}>{children}</div>;
