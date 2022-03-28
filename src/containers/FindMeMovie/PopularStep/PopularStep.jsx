import React from 'react';
import classes from './PopularStep.module.scss';
import Button from '../../../components/UI/Button/Button';

const options = [
  { label: 'Popular', value: 10000 },
  { label: 'Unpopular', value: 1 },
];

const PopularStep = ({ onNextStepHandler }) => {
  return (
    <div className={classes.PopularStep}>
      <h2>Finally, something popular or not so much well known?</h2>
      <div className={classes.PopularStep__Options}>
        {options.map((opt) => {
          return (
            <Button
              variant='filled'
              clicked={() => onNextStepHandler(opt.value)}
              key={opt.value}
            >
              {opt.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PopularStep;
