import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import FullPage from '../../components/SeeAll/SeeAll';
import classes from './Favourites.module.css';

const Favourites = () => {

  const dispatch = useDispatch();



  useEffect(() => {

  },[])
  return (
    <div>
      <h1 className={classes.MainTitle}>No Favourites Movies</h1>      
    </div>
  )
}

export default Favourites;
