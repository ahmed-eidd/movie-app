import React from 'react';
import Button from '../../../components/UI/Button/Button';
import { NextStepProp } from '../type';
import classes from './LanguageStep.module.scss';

interface LanguageStepProps {
  onNextStepHandler: (data: string) => void;
}

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'Arabic', value: 'ar' },
];

const LanguageStep:React.FC<NextStepProp> = ({ onNextStepHandler }) => {
  return (
    <div className={classes.LanguageStep}>
      <h2>Please pick a language</h2>

      <div className={classes.LanguageStep__List}>
        {languages.map((lang) => (
          <Button
            variant='filled'
            clicked={() => onNextStepHandler(lang.value)}
            key={lang.value}
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageStep;
