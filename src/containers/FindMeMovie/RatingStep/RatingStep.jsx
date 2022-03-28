import React, { useState } from 'react';
import classes from './RatingStep.module.scss';
import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/UI/Form/Form';
import Input from '../../../components/UI/Input/Input';

const options = ['Less than 7', 'More than 7'];

const RatingStep = ({ onNextStepHandler }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  return (
    <div>
      <h2>Please tell us what rating this movie should have</h2>
      <Form
        className={classes.RatingStep__Form}
        onSubmit={() => {
          if (error || !value) {
            return;
          }
          onNextStepHandler(value);
        }}
      >
        <Input
          placeholder='min = 0, max = 10'
          onChange={(e) => {
            const val = e.target.value;
            setValue(val);
            if (val < 0 || val > 10) {
              setError('Minimun is 0 Max is 10');
              console.log('err');
              return;
            }
            setError('');
          }}
          error={error}
          value={value}
          type='number'
        />
        <Button type='submit'>Next</Button>
      </Form>
    </div>
  );
};

export default RatingStep;
