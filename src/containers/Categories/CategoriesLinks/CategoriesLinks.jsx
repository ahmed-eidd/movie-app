import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CategoriesLinks.module.scss';

const CategoriesLinks = ({ genreType, name }) => {
  // a function to return a link with the genre id
  let link = (genre) => {
    return `/categories/${genre}`;
  };
  return (
    <Link className={classes.CategoriesLinks} to={link(genreType)}>
      {name}
    </Link>
  );
};

export default CategoriesLinks;
