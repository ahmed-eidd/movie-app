import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import FullPage from '../../components/FullPage/FullPage';
import * as actions from '../../store/actions/index';
import classes from './Favourites.module.css';

const Favourites = () => {

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const favMovies = useSelector((state) => state.fav.favouritesMovies);
  let main = <h1 className={classes.MainTitle}>No Favourites Movies</h1>;
  if (favMovies.length > 0) {
    main = <FullPage incomingMovies={favMovies} />
  }
  useEffect(() => {
   !loginStatus && dispatch(actions.setLoginModal()) 
  },[dispatch,loginStatus])
  return (
    <div>
     { loginStatus ? main : <h1 className={classes.MainTitle}>Sign Up or Log In First</h1> }   
    </div>
  )
}

export default Favourites;
