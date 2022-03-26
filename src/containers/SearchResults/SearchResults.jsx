import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FullPage from '../../components/FullPage/FullPage';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './SearchResults.module.scss';

const SearchResults = (props) => {
  const searchResult = useSelector((state) => state.searchRes.results);
  const resultTitle = props.match.params.query.split('%20').join(' ');
  let main = <Spinner />;
  if (searchResult.length > 0) {
    main = (
      <React.Fragment>
        <h2 className={classes.title}>Results for '{resultTitle}'</h2>
        <FullPage incomingMovies={searchResult} />
      </React.Fragment>
    );
  }
  if (searchResult.length === 0) {
    main = (
      <h3 className={classes.noResultTitle}>
        No Result for '{resultTitle}' ...
      </h3>
    );
  }
  return <div>{main}</div>;
};

export default withRouter(SearchResults);
