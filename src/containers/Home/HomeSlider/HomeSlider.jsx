import React from 'react';
import classes from './HomeSlider.module.css';
import Slider from 'react-slick';

const HomeSlider = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.src} alt={props.title} />
      <div className={classes.textContainer}>
        <p>{props.title}</p>
        <ul className={classes.genre}>{
        props.genre
        }</ul>
        <p>{props.rating} / 10</p>
        <i className="fas fa-star"></i>
      </div>
    </div>
  );
};

export default HomeSlider;
