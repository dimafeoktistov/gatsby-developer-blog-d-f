import Link from 'gatsby-link'
import React, { Fragment } from 'react'
import styles from './navlink.module.scss'

const Navlink = props => {
  return (
    <Fragment>
      <Link
        className={props.active ? styles.active : styles.navlink}
        to={props.to}
        onClick={props.clicked}
      >
        {props.children}
      </Link>
    </Fragment>
  )
}

export default Navlink
