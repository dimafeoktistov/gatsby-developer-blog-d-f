import React from 'react'
import styles from './navlinks.module.scss'
import Navlink from './NavLink/Navlink'

//Included props called active to indicate active page

const Navlinks = props => {
  return (
    <ul className={styles.navigation}>
      <Navlink to="/" clicked={props.clicked}>
        Home
      </Navlink>
      <Navlink to="/about" clicked={props.clicked}>
        About
      </Navlink>
      <Navlink to="/contacts" clicked={props.clicked}>
        Contact
      </Navlink>
    </ul>
  )
}

export default Navlinks
