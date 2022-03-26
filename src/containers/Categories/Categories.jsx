import React from 'react';
import { useSelector } from 'react-redux';
// import * as action from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Categories.module.scss';
import CategoriesLinks from './CategoriesLinks/CategoriesLinks';
// import SeeAll from '../../components/SeeAll/SeeAll';

const Categories = () => {
  // Redux Store
  const genres = useSelector((state) => state.moviesHome.genres);
  // const loading = useSelector((state) => state.ui.loading);

  let main = <Spinner />;
  if (genres) {
    main = (
      <ul>
        {genres.map((genre) => (
          <CategoriesLinks
            key={genre.id}
            name={genre.name}
            genreType={genre.id}
          />
        ))}
      </ul>
    );
  }
  return <div className={classes.Categories}>{main}</div>;
};

export default Categories;
