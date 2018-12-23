import React from 'react'

import Navlinks from '../NavLinks/navlinks'
import classes from './Sidebar.module.scss'
import Backdrop from '../UI/Backdrop/Backdrop'

const sideBar = props => {
  let attachedClasses = [classes.sideBar, classes.close]
  if (props.open) {
    attachedClasses = [classes.sideBar, classes.open]
  }
  return (
    <aside>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Navlinks active={true} clicked={props.closed} />
      </div>
    </aside>
  )
}

export default sideBar
