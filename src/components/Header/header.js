import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'
import Navlinks from '../NavLinks/navlinks'
import SidebarButton from '../Sidebar/sidebarButton'

const Header = props => {
  let headerStyles
  if (!props.floating) {
    headerStyles = [styles.header]
  } else {
    headerStyles = [styles.header, styles.moving]
  }
  return (
    <header className={headerStyles.join(' ')}>
      <div className={styles.widthFix}>
        <div className={styles.title}>
          <Link to="/">Dima Feoktistov - Ph.D.</Link>
        </div>
        <nav className={styles.desktopOnly}>
          <Navlinks />
        </nav>
        <SidebarButton drawerToggleClicked={props.drawerToggleClicked} />
      </div>
    </header>
  )
}

export default Header
