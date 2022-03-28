import React from 'react';
import Button from '../../../components/UI/Button/Button';

const CategoriesLinks = ({ genreType, name }) => {
  // a function to return a link with the genre id
  let link = (genre) => {
    return `/categories/${genre}`;
  };
  return (
    <>
      <Button as='link' variant='filled' to={link(genreType)}>
        {name}
      </Button>
    </>
  );
};

export default CategoriesLinks;
