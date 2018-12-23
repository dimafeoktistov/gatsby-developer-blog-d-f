import React from 'react'
import classes from './sidebarButton.module.scss'

const SidebarButton = props => {
  return (
    <div className={classes.sidebar} onClick={props.drawerToggleClicked}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default SidebarButton
