import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Home.module.css';
import Slider from 'react-slick';
import HomeSlider from '../../components/UI/HomeSlider/HomeSlider';
import PosterCard from '../../components/UI/PosterCard/PosterCard';
import Spinner from '../../components/UI/Spinner/Spinner';

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);
  const genres = useSelector((state) => state.genres);
  useEffect(() => {
    console.log();
    dispatch(actions.movieFetch());
    dispatch(actions.genreFetch());
    console.log(genres);
  }, []);

  const ImgUrl = (link) => {
    return `https://image.tmdb.org/t/p/original${link}`;
  };

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    speed: 500,
    slidestoshow: 1,
    slidestoscroll: 1,
  };

  const TrendingSettings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  const getGenreById = (genreId) => {
    const genre = genres.find((currGenre) => currGenre.id === genreId);
    // console.log(genre.name)
  };
  let main = (
    <div className={classes.spinnerContainer}>
      <Spinner />
    </div>
  );

  if (!loading) {
    main = (
      <div className={classes.container}>
        <div className={classes.SliderContainer}>
          <Slider {...settings}>
            {movies.map((movie) => (
              <HomeSlider
                genre={getGenreById(28)}
                src={ImgUrl(movie.backdrop_path)}
                title={movie.title}
                key={movie.id}
                rating={movie.vote_average}
              />
            ))}
          </Slider>
        </div>
        <div className={classes.trendingContainer}>
          <h2>Trending Now</h2>
          <div className={classes.trendingPosterCont}>
            <Slider {...TrendingSettings}>
              {movies.map((movie) => (
                <PosterCard
                  src={ImgUrl(movie.poster_path)}
                  title={movie.title}
                  key={movie.id}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }

  return main;
};

export default Home;
