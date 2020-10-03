import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FullPage from '../../components/FullPage/FullPage';
import classes from './WishList.module.scss';
import * as actions from '../../store/actions/index';

const WishList = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const wishListMovies = useSelector((state) => state.wishList.wishListMovies);

  let main = <h1 className={classes.MainTitle}>No WishList Movies</h1>;
  if (wishListMovies.length > 0) {
    main = (
      <div>
        <h1 className={classes.MainTitle}>Your Wishlist :</h1>
        <FullPage incomingMovies={wishListMovies} />
      </div>
    );
  }
  useEffect(() => {
    !loginStatus && dispatch(actions.setLoginModal());
  }, [dispatch, loginStatus]);
  return (
    <div>
      {loginStatus ? (
        main
      ) : (
        <h1 className={classes.MainTitle}>Sign Up or Log In First</h1>
      )}
      >
    </div>
  );
};

export default WishList;
