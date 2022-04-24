import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import PosterCard from '../../../components/UI/PosterCard/PosterCard';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { findMeMovieAction } from '../../../store/actions/findMeMovie';
import classes from './RecommendationStep.module.scss';

interface RecommendationStepProps {
  fetchMovie: boolean;
  data: {};
}

interface genreType {
  id: number;
  name: string;
}

const ImgUrl = (link: string) => {
  return `https://image.tmdb.org/t/p/w500${link}`;
};

const RecommendationStep: React.FC<RecommendationStepProps> = ({
  fetchMovie,
  data,
}) => {
  const dispatch = useDispatch();
  const foundMovies = useSelector(
    (state: RootStateOrAny) => state?.findMeMovie?.findMeMovie
  );
  const genres = useSelector(
    (state: RootStateOrAny) => state?.moviesHome?.genres
  );
  const loading = useSelector((state: RootStateOrAny) => state?.ui?.loading);

  const [selectedMovie, setSelectedMovie] = useState(0);

  useEffect(() => {
    if (fetchMovie) {
      dispatch(findMeMovieAction(data));
    }
  }, [fetchMovie, dispatch, data]);

  return (
    <div className={classes.RecommendationStep}>
      {loading ? (
        <Spinner />
      ) : foundMovies ? (
        <>
          <PosterCard
            id={foundMovies[selectedMovie]?.id}
            favMovie={foundMovies[selectedMovie]}
            wishListMovie={foundMovies[selectedMovie]}
            src={ImgUrl(foundMovies[selectedMovie]?.poster_path)}
            title={foundMovies[selectedMovie]?.title}
            key={foundMovies[selectedMovie]?.id}
            genre={
              foundMovies[selectedMovie]?.genre_ids
                ? foundMovies[0].genre_ids.flatMap((g: string | number) =>
                    genres
                      .filter((genre: genreType) => genre.id === g)
                      .map((r: genreType) => <li key={r.id}>{r.name},</li>)
                  )
                : ''
            }
          />
          <Button
            clicked={() => setSelectedMovie(selectedMovie + 1)}
            disabled={selectedMovie === foundMovies?.length - 1}
          >
            i don't like it, show another movie
          </Button>
        </>
      ) : (
        <p>Sorry No Movies, Try different inputs</p>
      )}
    </div>
  );
};

export default RecommendationStep;
