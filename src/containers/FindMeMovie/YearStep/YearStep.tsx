import React from 'react';
import Button from '../../../components/UI/Button/Button';
import { NextStepProp } from '../type';
import classes from './YearStep.module.scss';

const options = [
  { value: '1980-01-01', label: '80s' },
  { value: '1990-01-01', label: '90s' },
  { value: '2000-01-01', label: '20s' },
  { value: '2010-01-01', label: '2010s' },
];

const YearStep: React.FC<NextStepProp> = ({ onNextStepHandler }) => {
  return (
    <div className={classes.YearStep}>
      <h2>Pick Era</h2>
      <div>
        {options.map((opt) => (
          <Button
            key={opt.value}
            clicked={() => onNextStepHandler(opt.value)}
            variant='filled'
          >
            {opt.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default YearStep;
