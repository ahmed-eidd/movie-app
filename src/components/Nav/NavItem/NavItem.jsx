import React from 'react';
import classes from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const NavItem = ({ location, link, icon, children, newSign }) => {
  let attachedClasses = [classes.before].join('');

  if (location.pathname === link) {
    attachedClasses = [classes.before, classes.linkActive].join(' ');
  }

  return (
    <li className={classes.NavItem}>
      <div className={attachedClasses}></div>
      <NavLink to={link} exact activeClassName={classes.active}>
        <i className={icon}></i>
        <span>{children}</span>
      </NavLink>
      {newSign && <p className={classes.NavItem__NewSign}>New</p>}
    </li>
  );
};

export default withRouter(NavItem);
