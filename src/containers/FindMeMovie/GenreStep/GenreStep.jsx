import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from '../../../components/UI/Select/Select';
import { dataAsSelectOption } from '../../../helpers/dataAsSelectOptions';
import classes from './GenreStep.module.scss';

const GenreStep = ({ onNextStepHandler }) => {

  const genres = useSelector((state) => state.moviesHome.genres);
  const [value, setValue] = useState(null);

  // convert genres ArrOfObj to [{value:..., label:...}] for react-select option props
  const genresOptions = dataAsSelectOption(genres, 'id', 'name');

  return (
    <div className={classes.GenreStep}>
      <h2>Please pick a genre</h2>
      <div className={classes.GenreStep__Genres}>
        <Select
          value={value}
          placeholder='Please select a genre'
          onChange={(value) => {
            setValue(value);
            onNextStepHandler(value?.label);
          }}
          options={genresOptions}
        />
      </div>
    </div>
  );
};

export default GenreStep;
