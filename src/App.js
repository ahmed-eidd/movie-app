import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import * as actions from './store/actions/index';
import './App.css';


const App = () => {
  
  
  const dispatch = useDispatch()

  useEffect(() => {
    console.log()
    dispatch(actions.movieFetch())
  
  }, [dispatch])
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
