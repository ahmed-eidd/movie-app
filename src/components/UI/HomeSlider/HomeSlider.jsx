import React from 'react';
import classes from './HomeSlider.module.css';
import Slider from 'react-slick';

const HomeSlider = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.src} alt={props.title} />
      <div className={classes.textContainer}>
        <p>{props.title}</p>
        <p>{props.genre}</p>
        <p>{props.rating} / 10</p>
      </div>
    </div>
  );
};

export default HomeSlider;
