import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './PosterCard.module.scss';
import * as actions from '../../../store/actions/index';

const PosterCard = ({ src, title, genre, favMovie, wishListMovie, id }) => {
  const dispatch = useDispatch();
  // a function to reduce the title if it has more than 17 character with convert the string into an array to use the reduce method on it and join it back to a string again
  const limitTitle = (name, limit = 17) => {
    const newTitle = [];
    if (name?.length > limit) {
      name.split(' ').reduce((acc, cur) => {
        if (acc + cur.length <= limit) newTitle.push(cur);
        return acc + cur.length;
      }, 0);
      return `${newTitle.join(' ')} ...`;
    }
    return name;
  };

  return (
    <div className={classes.posterCardCont}>
      <div className={classes.img}>
        <button
          className={classes.likeBtn}
          onClick={() => dispatch(actions.getFavMovies(favMovie))}
        >
          <i className='far fa-heart'></i>
        </button>
        <button
          onClick={() => dispatch(actions.getWishListMovies(wishListMovie))}
          className={classes.wishListBtn}
        >
          <i className='far fa-clock'></i>
        </button>
        <img src={src} alt={title} className={classes.posterImg} />
      </div>
      <Link to={`/details/${id}`} className={classes.title}>
        {limitTitle(title)}
      </Link>
      <ul className={classes.genres}>{genre.slice(0, 2)}</ul>
    </div>
  );
};

export default PosterCard;
