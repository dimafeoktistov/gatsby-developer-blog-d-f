import React from 'react';
import classes from './sidebarButton.module.scss';

const SidebarButton = ({ drawerToggleClicked }) => (
  <div className={classes.sidebar} onClick={drawerToggleClicked}>
    <div />
    <div />
    <div />
  </div>
);

export default SidebarButton;
