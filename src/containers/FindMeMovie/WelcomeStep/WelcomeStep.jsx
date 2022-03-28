import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './WelcomeStep.module.scss';

const WelcomeStep = ({ onNextStepHandler }) => {
  return (
    <div className={classes.WelcomeStep}>
      <h2>Welcome To MovieBox</h2>
      <p>
        Tell us about your favorite genre and we'll a movie that's you'll
        probably like
      </p>
      <Button clicked={onNextStepHandler}>Let's Start</Button>
    </div>
  );
};

export default WelcomeStep;
