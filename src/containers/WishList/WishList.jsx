import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import FullPage from '../../components/SeeAll/SeeAll';
import classes from './WishList.module.css';

const WishList = () => {
  return (
    <div>
      <h1 className={classes.MainTitle}>No WishList Movies</h1>
    </div>
  )
}

export default WishList;
