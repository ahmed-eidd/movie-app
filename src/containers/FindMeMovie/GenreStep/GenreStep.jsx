import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import classes from './GenreStep.module.scss';

const GenreStep = ({ onNextStepHandler }) => {
  const genres = useSelector((state) => state.moviesHome.genres);
  return (
    <div className={classes.GenreStep}>
      <h2>Please pick a genre</h2>
      <div className={classes.GenreStep__Genres}>
        {genres.map((genre) => (
          <Button
            clicked={() => onNextStepHandler(genre.name)}
            variant='filled'
          >
            {genre?.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GenreStep;
