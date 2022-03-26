import React, { useEffect } from 'react';
import classes from './TopChart.module.scss';
import FullPage from '../../components/FullPage/FullPage';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

const TopChart = () => {
  const dispatch = useDispatch();
  const topChartMovies = useSelector((state) => state.top.topChart);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(actions.topChart());
  }, [dispatch]);

  let main = <Spinner />;

  if (!loading) {
    main = (
      <div className={classes.container}>
        <h2 className={classes.Title}>Top Chart</h2>
        <FullPage incomingMovies={topChartMovies} />
      </div>
    );
  }
  return main;
};

export default TopChart;
