import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Home.module.css';
import Slider from 'react-slick';
import HomeSlider from './HomeSlider/HomeSlider';
import PosterCard from '../../components/UI/PosterCard/PosterCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import CardsSlider from '../../components/UI/CardsSlider/CardsSlider';

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);
  const genres = useSelector((state) => state.genres);
  const nowPlaying = useSelector((state) => state.nowPlaying);
  useEffect(() => {
    console.log();
    dispatch(actions.movieFetch());
    dispatch(actions.genreFetch());
    dispatch(actions.nowPlaying());
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

  const cardsSettings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  // const getGenreById = ({ ...genreId }) => {
  //   const genre = genres.find((currGenre) => currGenre.id === genreId.id);
  //   console.log(genre);
  // };

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
                genre={movie.genre_ids.flatMap((g) =>
                genres.filter((genre) => genre.id === g).map((r) => <li>{r.name}</li>)
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
          link="/home/trendingnow"
        />
        <CardsSlider
          settings={cardsSettings}
          movies={nowPlaying}
          title="Now Playing"
          link="home/nowplaying"
          genres={genres}
        />
     
      </div>
    );
  }

  return main;
};

export default Home;



