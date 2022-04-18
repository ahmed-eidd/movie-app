import React, { useState } from 'react';
import classes from './RatingStep.module.scss';
import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/UI/Form/Form';
import Input from '../../../components/UI/Input/Input';

interface RatingStepProps {
  onNextStepHandler: (str: string) => void;
}

const RatingStep: React.FC<RatingStepProps> = ({ onNextStepHandler }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  return (
    <div>
      <h2>Please tell us what rating this movie should have</h2>
      <Form
        className={classes.RatingStep__Form}
        onSubmit={() => {
          if (error) {
            return;
          }
          if (!value) {
            setError('Please enter a number');
            return;
            }

          onNextStepHandler(value);
        }}
      >
        <Input
          placeholder='min = 0, max = 10'
          className=''
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            setValue(val);
            if (+val < 0 || +val > 10) {
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