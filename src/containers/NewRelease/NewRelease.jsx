import React, { useEffect } from 'react';
import classes from './NewRelease.module.css';
import FullPage from '../../components/SeeAll/SeeAll';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

const TopChart = () => {
  const dispatch = useDispatch();
  const newReleaseMovies = useSelector((state) => state.new.newRelease);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(actions.newReleaseFetch());
  }, []);

  let main = <Spinner />;

  if (!loading) {
    main = (
      <div className={classes.container}>
        <h2 className={classes.Title}>New Release</h2>
        <FullPage incomingMovies={newReleaseMovies} />
      </div>
    );
  }
  return main;
};

export default TopChart;