import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import classes from './MultiStepForm.module.scss';

const MultiStepForm = ({
  steps = [],
  children,
  currentStep,
  currentProgressStep,
}) => {
  return (
    <div className={classes.Container}>
      <div className={classes.ProgressBar}>
        {steps.map((step, i) => (
          <>
            <div className={[classes.ProgressBar__Step].join(' ')}>
              <p className={classes.ProgressBar__Step__Number}>{i + 1}</p>
              <p className={classes.ProgressBar__Step__Name}>{step}</p>
            </div>
            {i + 1 < steps.length && (
              <div
                className={[
                  classes.ProgressBar__Step__Bar,
                  i <= currentProgressStep &&
                    classes.ProgressBar__Step__Bar__complete,
                ].join(' ')}
              ></div>
            )}
          </>
        ))}
      </div>
      <motion.div
        transition={{
          tension: 90,
          friction: 70,
          mass: 0.4,
          duration: 0.5,
        }}
        initial={false}
        animate={{ x: currentStep * -100 + '%' }}
        className={classes.Animation}
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            aria-hidden={currentStep !== i}
            tabIndex={currentStep === i ? 0 : -1}
            className={classes.Content}
            style={{
              // height: currentStep === i ? '100%' : 0,
            }}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MultiStepForm;
