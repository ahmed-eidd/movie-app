import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Home.module.scss';
import Slider from 'react-slick';
import HomeSlider from './HomeSlider/HomeSlider';
import PosterCard from '../../components/UI/PosterCard/PosterCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import CardsSlider from '../../components/UI/CardsSlider/CardsSlider';

const Home = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Redux State
  const movies = useSelector((state) => state.moviesHome.movies);
  const loading = useSelector((state) => state.ui.loading);
  const genres = useSelector((state) => state.moviesHome.genres);
  const nowPlaying = useSelector((state) => state.moviesHome.nowPlaying);

  // useEffect Fecthing
  useEffect(() => {
    console.log();
    dispatch(actions.movieFetch());
    // dispatch(actions.genreFetch());
    dispatch(actions.nowPlaying());
    console.log(genres);
  }, []);

  // a Function that gets called on every img to get image
  const ImgUrl = (link) => {
    return `https://image.tmdb.org/t/p/w500${link}`;
  };

  // React Slick Settings for the Header Slider
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    speed: 500,
    slidestoshow: 1,
    slidestoscroll: 1,
  };

  // React Slick Settings for the Cards sections
  const cardsSettings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  // conditional Main Content
  let main = (
    <div className={classes.spinnerContainer}>
      <Spinner />
    </div>
  );

  // Main Content if state.loading not True
  if (!loading) {
    main = (
      <div className={classes.container}>
        <div className={classes.SliderContainer}>
          <Slider {...settings}>
            {movies.map((movie) => (
              <HomeSlider
                genre={movie.genre_ids.flatMap((g) =>
                  genres
                    .filter((genre) => genre.id === g)
                    .map((r) => <li key={r.id}>{r.name}</li>)
                )}
                src={ImgUrl(movie.backdrop_path)}
                title={movie.title}
                key={movie.id}
                rating={movie.vote_average}
              />
            ))}
          </Slider>
        </div>

        <CardsSlider
          settings={cardsSettings}
          movies={movies}
          title="Trending Now"
          link="/seeall/trendingnow"
        />

        <CardsSlider
          settings={cardsSettings}
          movies={nowPlaying}
          title="Now Playing"
          link="seeall/nowplaying"
          genres={genres}
        />
      </div>
    );
  }
  return main;
};

export default Home;
