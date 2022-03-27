import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Categories from './containers/Categories/Categories';
import FullPage from './components/FullPage/FullPage';
import TopChart from './containers/TopChart/TopChart';
import NewRelease from './containers/NewRelease/NewRelease';
import Favourites from './containers/Favourites/Favourites';
import WishList from './containers/WishList/WishList';
import SearchResults from './containers/SearchResults/SearchResults';
import GetDetails from './components/GetDetails/GetDetails';
import * as actions from './store/actions/index';
import FindMeMovie from './containers/FindMeMovie/FindMeMovie';
// import searchReducer from './store/reducers/searchReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.genreFetch());
  }, [dispatch]);

  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/categories/:genreType' component={FullPage} />
          <Route path='/seeall/:type' component={FullPage} />
          <Route path='/' exact component={Home}></Route>
          <Route path='/categories' exact component={Categories} />
          <Route path='/top' exact component={TopChart} />
          <Route path='/new' exact component={NewRelease} />
          <Route path='/likes' exact component={Favourites} />
          <Route path='/wishlist' exact component={WishList} />
          <Route path='/search/:query' component={SearchResults} />
          <Route path='/details/:id' component={GetDetails} />
          <Route path='/find-me-movie' exact component={FindMeMovie} />
          {/* <Route path="/categories/details/:id" component={GetDetails}/> */}
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
