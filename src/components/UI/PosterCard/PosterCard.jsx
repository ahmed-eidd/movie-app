import React from 'react';
import classes from './PosterCard.module.css';

const PosterCard = ({ src, title, genre }) => {
  return (
    <div className={classes.posterCardCont}>
      <img src={src} alt={title}/>
      <button className={classes.wishListBtn}></button>
      <button className={classes.likeBtn}></button>
      <p className={classes.title}>{title}</p>
      <p className={classes.title}>{genre}</p>
    </div>
  );
};

export default PosterCard;
