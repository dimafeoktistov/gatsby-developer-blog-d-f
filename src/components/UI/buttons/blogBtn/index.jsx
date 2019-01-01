import React from 'react';
import styles from './blogBtn.module.scss';

export default ({
  children, style, disabled, active, type = 'button', onSubmit,
}) => (
  <button
    onSubmit={onSubmit}
    type={type}
    disabled={disabled}
    style={style}
    className={active ? [styles.btn, styles.active].join(' ') : styles.btn}
  >
    {children}
  </button>
);
