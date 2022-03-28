import React from 'react';
import classes from './PopularStep.module.scss';
import Button from '../../../components/UI/Button/Button';
import Select from '../../../components/UI/Select/Select';

const options = ['Popular', 'Unpopular'];

const PopularStep = ({ onNextStepHandler }) => {
  return (
    <div className={classes.PopularStep}>
      <h2>Finally, something popular or not so much well known?</h2>
      <div className={classes.PopularStep__Options}>
        {options.map((opt) => {
          return (
            <Button variant='filled' clicked={() => onNextStepHandler(opt)}>
              {opt}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PopularStep;