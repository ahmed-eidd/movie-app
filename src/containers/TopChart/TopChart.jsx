import React,{useEffect} from 'react';
import FullPage from '../../components/SeeAll/SeeAll';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

const TopChart = () => {

  const dispatch =  useDispatch();
  const topChartMovies = useSelector((state) => state.top.topChart)
  const loading = useSelector((state) => state.ui.loading) 

  useEffect(() => {
    dispatch(actions.topChart())
  },[])

  let main = <Spinner/>

  if (!loading) {
    main = <FullPage incomingMovies={topChartMovies}/>
  }
  return main;
}

export default TopChart;
