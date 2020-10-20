import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
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
import guestSessionReducer from './store/reducers/guestSessionReducer';
import authReducer from './store/reducers/authReducer';
import searchReducer from './store/reducers/searchReducer';
import { BrowserRouter } from 'react-router-dom';
import favMoviesReducer from './store/reducers/favMoviesReducer';
import wishListMoviesReducer from './store/reducers/wishListMoviesReducer';
import getDetailsReducer from './store/reducers/getDetailsReducer';

// Redux Saga 

import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/Sagas/saga';

const rootReducer = combineReducers({
  moviesHome: movieHomeReducer,
  categories: categoriesReducer,
  ui: UIReducer,
  top: topChartReducer,
  new: newRelaseReducer,
  guestSession: guestSessionReducer,
  fav: favMoviesReducer,
  wishList: wishListMoviesReducer,
  auth: authReducer,
  movieDetails: getDetailsReducer,
  searchRes: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk,sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
