import React, { useEffect } from 'react';
import NavItem from './NavItem/NavItem';
import classes from './Nav.module.css';

const Nav = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <nav className={classes.Nav}>
      <p className={classes.Title}>Main</p>
      <ul className={classes.NavList}>
        <NavItem link="/" icon="fas fa-home">
          Home
        </NavItem>
        <NavItem link="/categories" icon="fas fa-th-large">
          Categories
        </NavItem>
        <NavItem link="/top" icon="fas fa-chart-line">
          Top Chart
        </NavItem>
        <NavItem link="/new" icon="far fa-newspaper">
          New Release
        </NavItem>
      </ul>
      <p className={classes.Title}>User</p>
      <ul className={classes.NavList}>
        <NavItem link="/likes" icon="far fa-heart">
          Favourites
        </NavItem>
        <NavItem link="/wishlist" icon="far fa-clock">
          Wishlist
        </NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
