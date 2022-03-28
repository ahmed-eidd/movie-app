import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import MultiStepForm from '../../components/UI/MultiStepForm/MultiStepForm';
import classes from './FindMeMovie.module.scss';
import GenreStep from './GenreStep/GenreStep';
import LanguageStep from './LanguageStep/LanguageStep';
import PopularStep from './PopularStep/PopularStep';
import RatingStep from './RatingStep/RatingStep';
import WelcomeStep from './WelcomeStep/WelcomeStep';
import YearStep from './YearStep/YearStep';

const FindMeMovie = () => {
  const [step, setStep] = useState(0);
  const [progressStep, setProgressStep] = useState(0);
  const [data, setData] = useState({});

  const onGoBackHandler = (modifyProgress) => {
    if (step <= 1) return;
    if (modifyProgress) setProgressStep(progressStep - 1);
    setStep(step - 1);
  };

  const onNextHandler = (modifyProgress) => {
    setStep(step + 1);
    if (modifyProgress) setProgressStep(progressStep + 1);
  };

  console.log(data);

  return (
    <div className={classes.FindMeMovie}>
      <div className={classes.FindMeMovie__Header}>
        <h2 className={classes.FindMeMovie__Title}>
          <span>Welcome</span>, Let's Help you find a new movie
        </h2>
        <Button
          clicked={(data) => {
            onGoBackHandler(false);
          }}
          type='grey'
          disabled={step <= 1}
        >
          Go Back
        </Button>
      </div>
      <MultiStepForm
        currentStep={step}
        currentProgressStep={progressStep}
        steps={['Genre', 'Language', 'Rating', 'Popular', 'Year']}
      >
        <WelcomeStep
          onNextStepHandler={() => {
            onNextHandler();
          }}
        />
        <GenreStep
          onNextStepHandler={(newData) => {
            onNextHandler(true);
            setData({ ...data, genre: newData });
          }}
        />
        <LanguageStep
          onNextStepHandler={(newLanguage) => {
            onNextHandler(true);
            setData({ ...data, language: newLanguage });
          }}
        />
        <RatingStep />
        <YearStep />
        <PopularStep />
      </MultiStepForm>
    </div>
  );
};

export default FindMeMovie;
