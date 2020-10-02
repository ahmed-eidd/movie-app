import React, { useEffect } from 'react';
import classes from './GetDetails.module.css';
import Spinner from '../UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import CardsSlider from '../UI/CardsSlider/CardsSlider';

const GetDetails = (props) => {
  const movie = useSelector((state) => state.movieDetails.movieDetails);
  const loading = useSelector((state) => state.ui.loading);
  const recommendations = useSelector(
    (state) => state.movieDetails.recommendations
  );
  const genres = useSelector((state) => state.moviesHome.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.getDetailsFetch(props.match.params.id));
    dispatch(actions.getRecommendationsFetch(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const favouriteHandler = (movie) => {
    dispatch(actions.getFavMovies(movie));
  };

  const wishListHandler = (movie) => {
    dispatch(actions.getWishListMovies(movie));
  };

  const ImgUrl = (link) => {
    return `https://image.tmdb.org/t/p/w500${link}`;
  };

  const cardsSettings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  let main = <Spinner />;

  if (movie && !loading) {
    main = (
      <div>
        <div className={classes.container}>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src={ImgUrl(movie.poster_path)}
              alt={movie.title}
            />
          </div>
          <div className={classes.detailsContainer}>
            <h2 className={classes.detailsTitle}>{movie.title}</h2>
            <ul className={classes.detailsList}>
              {movie.genres.map((genre) => (
                <li key={genre.id} className={classes.detailsListItem}>
                  {genre.name}
                </li>
              ))}
            </ul>
            <div className={classes.detailsVoteContainer}>
              <p className={classes.detailsVote}>{movie.vote_average} / 10</p>
              <i className="fas fa-star"></i>
            </div>
            <p className={classes.detailsRelease}>{movie.release_date}</p>
            <div className={classes.detailsBtns}>
              <button
                className={classes.detailsBtn}
                onClick={() => favouriteHandler(movie)}
              >
                Favourites <i className="far fa-heart"></i>
              </button>
              <button
                className={classes.detailsBtn}
                onClick={() => wishListHandler(movie)}
              >
                Wishlist <i className="far fa-clock"></i>
              </button>
            </div>
          </div>
          <div className={classes.detailsOverviewContainer}>
            <h3 className={classes.detailsOverviewTitle}>Overview:</h3>
            <p className={classes.detailsOverviewText}>{movie.overview}</p>
          </div>
        </div>
        <CardsSlider
          movies={recommendations}
          settings={cardsSettings}
          title="Recommendations"
        />
      </div>
    );
  }
  return main;
};

export default withRouter(GetDetails);
