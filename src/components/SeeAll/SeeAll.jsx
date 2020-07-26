import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import PosterCard from '../UI/PosterCard/PosterCard';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router-dom';
import classes from './SeeAll.module.css';

const SeeAll = (props) => {
  // Dispatch Hook
  const dispatch = useDispatch();


  // React Redux Store
  let movies = null;
  const tredingnow = useSelector((state) => state.movies );
  const nowPlyaing = useSelector((state) => state.nowPlaying);
  const genres = useSelector((state) => state.genres);
  const loading = useSelector((state) => state.loading);


  // useEffect for fetching 
  useEffect(() => {
    // window.pageYOffset() === '0'
    document.body.scrollTo = 0; 
    dispatch(actions.genreFetch());
    console.log(props);

    // switch Statement to check the match.params.type if its for trending or now playing page
    switch (props.match.params.type) {
      case 'trendingnow':
        dispatch(actions.movieFetch());
        break;
      case 'nowplaying':
        dispatch(actions.nowPlaying());
        break;
      default:
        return;
    }
  }, [props.match.params.type, movies]);


  // Conditional for movies 
  if (props.match.params.type === 'trendingnow') {
    movies = tredingnow
  } else if (props.match.params.type === 'nowplaying'){
    movies = nowPlyaing
  }


  const ImgUrl = (link) => {
    return `https://image.tmdb.org/t/p/original${link}`;
  };

  let main = <Spinner />;
  if (movies) {
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
                .map((r) => <li>{r.name},</li>)
            )}
          />
        ))}
      </div>
    );
  }

  return main;
};

export default withRouter(SeeAll);
