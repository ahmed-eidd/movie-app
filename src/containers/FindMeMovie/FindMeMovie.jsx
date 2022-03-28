import React, { useEffect, useState } from 'react';
import Button from '../../components/UI/Button/Button';
import MultiStepForm from '../../components/UI/MultiStepForm/MultiStepForm';
import classes from './FindMeMovie.module.scss';
import GenreStep from './GenreStep/GenreStep';
import LanguageStep from './LanguageStep/LanguageStep';
import PopularStep from './PopularStep/PopularStep';
import RatingStep from './RatingStep/RatingStep';
import RecommendationStep from './RecommendationStep/RecommendationStep';
import WelcomeStep from './WelcomeStep/WelcomeStep';
import YearStep from './YearStep/YearStep';

const FindMeMovie = () => {
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState([
    'Genre',
    'Language',
    'Rating',
    'Popular',
    'Year',
  ]);
  const [progressStep, setProgressStep] = useState(0);
  const [fetchMovie, setFetchMovie] = useState(false);
  const [data, setData] = useState({});

  const onGoBackHandler = (modifyProgress) => {
    if (step <= 1) return;
    if (modifyProgress) setProgressStep(progressStep - 1);
    setStep(step - 1);
    setFetchMovie(false);
  };

  const onNextHandler = (modifyProgress) => {
    setStep(step + 1);
    if (modifyProgress) setProgressStep(progressStep + 1);
  };

  useEffect(() => {
    if (progressStep === steps.length) {
      setFetchMovie(true);
    }
  }, [progressStep, steps]);

  return (
    <div className={classes.FindMeMovie}>
      <div className={classes.FindMeMovie__Header}>
        <h2 className={classes.FindMeMovie__Title}>
          <span>Welcome</span>, Let's Help you find a new movie
        </h2>
        <Button
          clicked={(data) => {
            onGoBackHandler(true);
          }}
          variantColor='grey'
          disabled={step <= 1}
        >
          Go Back
        </Button>
      </div>
      <MultiStepForm
        currentStep={step}
        currentProgressStep={progressStep}
        steps={steps}
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
        <RatingStep
          onNextStepHandler={(value) => {
            onNextHandler(true);
            setData({ ...data, rating: value });
          }}
        />
        <PopularStep
          onNextStepHandler={(value) => {
            onNextHandler(true);
            setData({ ...data, rating: value });
          }}
        />
        <YearStep
          onNextStepHandler={(value) => {
            onNextHandler(true);
            setData({ ...data, rating: value });
          }}
        />
        <RecommendationStep fetchMovie={fetchMovie} />
      </MultiStepForm>
    </div>
  );
};

export default FindMeMovie;
