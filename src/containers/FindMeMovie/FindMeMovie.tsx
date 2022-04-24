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
  const [steps] = useState(['Genre', 'Language', 'Rating', 'Popular', 'Year']);
  const [progressStep, setProgressStep] = useState(0);
  const [fetchMovie, setFetchMovie] = useState(false);
  const [data, setData] = useState({});

  const onGoBackHandler = (modifyProgress?: boolean) => {
    if (step <= 1) return;

    // if modifyProgress is passed => remove one to the step bar
    if (modifyProgress) setProgressStep(progressStep - 1);

    setStep(step - 1);
    setFetchMovie(false);
  };

  const onNextHandler = (modifyProgress?: boolean) => {
    setStep(step + 1);

    // if modifyProgress is passed => add one to the step bar
    if (modifyProgress) setProgressStep(progressStep + 1);
  };

  
  useEffect(() => {
    // fetch movies after finishing all the step
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
          clicked={() => {
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
          onNextStepHandler={(newData: string) => {
            onNextHandler(true);
            setData({ ...data, genre: newData });
          }}
        />

        <LanguageStep
          onNextStepHandler={(newLanguage: string) => {
            onNextHandler(true);
            setData({ ...data, language: newLanguage });
          }}
        />

        <RatingStep
          onNextStepHandler={(value: string) => {
            onNextHandler(true);
            setData({ ...data, rating: value });
          }}
        />

        <PopularStep
          onNextStepHandler={(value: string) => {
            onNextHandler(true);
            setData({ ...data, popular: value });
          }}
        />

        <YearStep
          onNextStepHandler={(value: string) => {
            onNextHandler(true);
            setData({ ...data, year: value });
          }}
        />

        <RecommendationStep data={data} fetchMovie={fetchMovie} />
      </MultiStepForm>
    </div>
  );
};

export default FindMeMovie;
