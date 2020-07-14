import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route, Switch} from 'react-router-dom'

import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Categories from './containers/Categories/Categories';


const App = () => {
  
  
 
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' exact component={Categories} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
