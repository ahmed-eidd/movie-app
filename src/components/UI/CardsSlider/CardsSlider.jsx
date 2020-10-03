import React from 'react';
import { useSelector } from 'react-redux';
import classes from './CardsSlider.module.scss';
import Slider from 'react-slick';
import PosterCard from '../PosterCard/PosterCard';
import { Link } from 'react-router-dom';

const CardsSlider = ({ movies, settings, title, link }) => {
  const genres = useSelector((state) => state.moviesHome.genres);
  const ImgUrl = (link) => {
    return `https://image.tmdb.org/t/p/w500${link}`;
  };
  return (
    <div className={classes.Container}>
      <div className={classes.TitleContainer}>
        <h2 className={classes.Title}>{title}</h2>
        {link && (
          <Link to={link} className={classes.SeeAll}>
            <p>See All</p>
            <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        )}
      </div>
      <div className={classes.PosterCont}>
        <Slider {...settings}>
          {movies.map((movie) => (
            <PosterCard
              id={movie.id}
              favMovie={movie}
              wishListMovie={movie}
              src={ImgUrl(movie.poster_path)}
              title={movie.title}
              key={movie.id}
              genre={movie.genre_ids.flatMap((g) =>
                genres
                  .filter((genre) => genre.id === g)
                  .map((r) => <li key={r.id}>{r.name},</li>)
              )}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardsSlider;
