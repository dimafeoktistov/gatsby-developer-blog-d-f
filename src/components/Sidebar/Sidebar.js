import React from 'react';

import Navlinks from '../NavLinks/navlinks';
import classes from './Sidebar.module.scss';
import Backdrop from '../UI/Backdrop/Backdrop';

const sideBar = ({ open, closed }) => {
  let attachedClasses = [classes.sideBar, classes.close];
  if (open) {
    attachedClasses = [classes.sideBar, classes.open];
  }
  return (
    <aside>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <Navlinks clicked={closed} />
      </div>
    </aside>
  );
};

export default sideBar;
