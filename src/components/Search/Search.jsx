import React, { useState,  } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './Search.module.scss';
import * as actions from '../../store/actions/index';

const Search = (props) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  // const clear = () => {
  //   setInput('');
  // };
  // useEffect(() => {
  //   return () => {
  //     setInput('')
  //   }
  // },[])
  return (
    <form
      className={classes.Form}
      onSubmit={(e) => {
        dispatch(actions.searchFetch(input));
        e.preventDefault();
        props.history.push(`/search/${input}`);
        e.target.elements.text.value = '';
      }}
    >
      <input
        className={classes.Input}
        name="text"
        autoComplete="off"
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default withRouter(Search);
