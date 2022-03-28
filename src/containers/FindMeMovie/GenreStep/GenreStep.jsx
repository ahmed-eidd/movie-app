import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import Select from '../../../components/UI/Select/Select';
import { dataAsSelectOption } from '../../../helpers/dataAsSelectOptions';
import classes from './GenreStep.module.scss';

const GenreStep = ({ onNextStepHandler }) => {
  const genres = useSelector((state) => state.moviesHome.genres);
  const genresOptions = dataAsSelectOption(genres, 'id', 'name');
  const [value, setValue] = useState(null);
  console.log(genresOptions);
  return (
    <div className={classes.GenreStep}>
      <h2>Please pick a genre</h2>
      <div className={classes.GenreStep__Genres}>
        <Select
          value={value}
          placeholder='Please select a genre'
          onChange={(value) => {
            setValue(value);
            onNextStepHandler(value?.value);
          }}
          options={genresOptions}
        />
      </div>
    </div>
  );
};

export default GenreStep;