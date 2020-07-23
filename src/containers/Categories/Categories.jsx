import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Categories.module.css';


const Categories = () => {
  const genres = useSelector((state) => state.genres);
  // const genres = []
  const loading = useSelector((state) => state.loading);


  let main = <p>There's nothing</p>;
  if (genres) {
    main = (
      <ul>
        {genres.map((genre) => <li key={genre.id}>{genre.name}</li>
  )}
      </ul>
    );
  }
  return <div className={classes.Categories}>
    {main}
    </div>;
};

export default Categories;
