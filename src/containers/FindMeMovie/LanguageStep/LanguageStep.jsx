import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './LanguageStep.module.scss';

const languages = [
  { label: 'English', value: 'en-Us' },
  { label: 'Spanish', value: 'es' },
  { label: 'Arabic', value: 'ar' },
];

const LanguageStep = ({ onNextStepHandler }) => {
  return (
    <div className={classes.LanguageStep}>
      <h2>Please pick a language</h2>

      <div className={classes.LanguageStep__List}>
        {languages.map((lang) => (
          <Button
            variant='filled'
            clicked={() => onNextStepHandler(lang.value)}
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageStep;
