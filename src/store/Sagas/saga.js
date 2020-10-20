import {takeEvery, put, call} from 'redux-saga/effects';
import * as actions from '../actions/index';
import {getTopChart} from './api';

function* topChartFetch (action) {

  try {
    yield put(actions.topChartStart());
    const reponse = yield call(getTopChart(), action.movies);
    yield put (actions.topChartRes(reponse));
  } catch (error) {
    yield put(actions.topChartErr())
  }

  //  return (dispatch) => {

  //   dispatch(topChartStart())
    
  //   const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    
  //   axios
  //     .get(
  //       URL
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       dispatch(topChartRes(res.data.results));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       dispatch(topChartErr());
  //     });
  // };
}






export default function* rootSaga() {
  yield takeEvery(actions.topChart(), topChartFetch)
}