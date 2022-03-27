import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import classes from './CategoriesLinks.module.scss';

const CategoriesLinks = ({ genreType, name }) => {
  // a function to return a link with the genre id
  let link = (genre) => {
    return `/categories/${genre}`;
  };
  return (
    <>
      {/* <Link className={classes.CategoriesLinks} to={link(genreType)}>
        {' '}
        {name}
      </Link> */}
      <Button as='link' variant='filled' to={link(genreType)}>
        {name}
      </Button>
    </>
  );
};

export default CategoriesLinks;
