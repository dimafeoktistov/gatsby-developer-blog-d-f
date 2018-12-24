import { Link } from 'gatsby';
import React, { Fragment } from 'react';
import styles from './navlink.module.scss';

const Navlink = ({
  to, children, clicked,
}) => (
  <Fragment>
    <Link
      className={styles.navlink}
      to={to}
      onClick={clicked}
      activeStyle={{
        color: 'green',
        borderBottom: '3px solid green',
      }}
    >
      {children}
    </Link>
  </Fragment>
);

export default Navlink;
