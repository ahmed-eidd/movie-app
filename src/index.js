import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from './app/store';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import movieHomeReducer from './store/reducers/movieHomeReducer';
import categoriesReducer from './store/reducers/categoriesReducer';
import UIReducer from './store/reducers/UIReducer';
import topChartReducer from './store/reducers/topChartReducer';
import newRelaseReducer from './store/reducers/newReleaseReducer';
import { BrowserRouter } from 'react-router-dom';



const rootReducer = combineReducers({
    moviesHome: movieHomeReducer,
    categories: categoriesReducer,
    ui: UIReducer,
    top: topChartReducer,
    new: newRelaseReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App  />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
