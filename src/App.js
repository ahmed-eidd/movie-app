import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Categories from './containers/Categories/Categories';
import SeeAll from './components/SeeAll/SeeAll';
import TopChart from './containers/TopChart/TopChart';
import NewRelease from './containers/NewRelease/NewRelease';
import * as actions from './store/actions/index';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.genreFetch());
  },[]);

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/categories/:genreType" component={SeeAll}/>
          <Route path="/seeall/:type" component={SeeAll} />
          <Route path="/" exact component={Home}></Route>
          <Route path="/categories" exact component={Categories} />
          <Route path="/top" exact component={TopChart} />
          <Route path="/new" exact component={NewRelease} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
