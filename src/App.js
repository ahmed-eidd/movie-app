import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import * as actions from './store/actions/index';
import './App.css';
import Layout from './components/Layout/Layout';


const App = () => {
  
  
  const dispatch = useDispatch()

  useEffect(() => {
    console.log()
    dispatch(actions.movieFetch())
  
  }, [dispatch])
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
