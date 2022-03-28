import React from 'react';
import Button from '../../../components/UI/Button/Button';

const options = [
  { value: '1980', label: '80s' },
  { value: '1990', label: '90s' },
  { value: '2000', label: '20s' },
  { value: '2010', label: '2010s' },
];

const YearStep = ({ onNextStepHandler }) => {
  return (
    <div>
      <h2>Pick Era</h2>
      <div>
        {options.map((opt) => (
          <Button clicked={() => onNextStepHandler(opt.value)} variant='filled'>
            {opt.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default YearStep;
