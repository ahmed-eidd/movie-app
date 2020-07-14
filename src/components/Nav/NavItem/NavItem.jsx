import React from 'react';
import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const NavItem = (props) => {
  let attachedClasses = [classes.before].join('');

  if (props.location.pathname === props.link) {
    attachedClasses = [classes.before, classes.linkActive].join(' ');

  }

  return (
    <li className={classes.NavItem}>
      <div className={attachedClasses}></div>
      <NavLink to={props.link} exact activeClassName={classes.active}>
        <i className={props.icon}></i>
        <span>{props.children}</span>
      </NavLink>
    </li>
  );
};

export default withRouter(NavItem);
