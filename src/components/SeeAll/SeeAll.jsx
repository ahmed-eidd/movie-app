import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import PosterCard from '../UI/PosterCard/PosterCard';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router-dom';
import classes from './SeeAll.module.css';

const SeeAll = (props) => {
  const searchGenre = (nameKey, myArray) => {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].id.toString() === nameKey) {
        return myArray[i].id.toString();
      }
    }
  };

  // Dispatch Hook
  const dispatch = useDispatch();

  // React Redux Store
  let movies = null;
  const tredingnow = useSelector((state) => state.moviesHome.movies);
  const nowPlyaing = useSelector((state) => state.moviesHome.nowPlaying);
  const genres = useSelector((state) => state.moviesHome.genres);
  const categories = useSelector((state) => state.categories.categoriesMovies);
  const loading = useSelector((state) => state.ui.loading);

  const { type } = props.match.params;
  const { genreType } = props.match.params;

  // useEffect for fetching
  useEffect(() => {
    window.scrollTo(0,0);
    // window.pageYOffset() === '0'
    document.body.scrollTo = 0;
    console.log(props);

    // switch Statement to check the match.params.type if its for trending or now playing page

    // switch (props) {
    //   case 'trendingnow':
    //     dispatch(actions.movieFetch());
    //     break;
    //   case 'nowplaying':
    //     dispatch(actions.nowPlaying());
    //     break;
    //   case searchGenre(props.match.params.genreType,genres):
    //     dispatch(actions.categoriesFecth(props.match.params.genreType))
    //     break;
    //   default:
    //     return;
    // }
    if (type === 'trendingnow') {
      dispatch(actions.movieFetch());
    } else if (type === 'nowplaying') {
      dispatch(actions.nowPlaying());
    } else if (genreType) {
      dispatch(actions.categoriesFecth(genreType));
    } else {

    }
  }, [genreType, dispatch, genres]);

  // Conditional for which movies to render
  if (props.match.params.type === 'trendingnow') {
    movies = tredingnow;
  } else if (props.match.params.type === 'nowplaying') {
    movies = nowPlyaing;
  } else if (props.match.params.genreType) {
    movies = categories;
  } else {
    movies = props.incomingMovies;
  }

  const ImgUrl = (link) => {
    return `https://image.tmdb.org/t/p/original${link}`;
  };

  let main = <Spinner />;
  if (!loading) {
    main = (
      <div className={classes.SeeAllContainer}>
        {movies.map((movie) => (
          <PosterCard
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
      </div>
    );
  }

  return main;
};

export default withRouter(SeeAll);
