import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.scss';
import Navlinks from '../NavLinks/navlinks';
import SidebarButton from '../Sidebar/sidebarButton';

const Header = ({ drawerToggleClicked }) => (
  <header className={styles.header}>
    <div className={styles.widthFix}>
      <div className={styles.title}>
        <Link to="/">Dima Feoktistov - Ph.D.</Link>
      </div>
      <nav className={styles.desktopOnly}>
        <Navlinks />
      </nav>
      <SidebarButton drawerToggleClicked={drawerToggleClicked} />
    </div>
  </header>
);

export default Header;
