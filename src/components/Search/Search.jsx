import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './Search.module.scss';
import * as actions from '../../store/actions/index';
import Input from '../UI/Input/Input';
import Form from '../UI/Form/Form';

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
    <Form
      className={classes.Form}
      onSubmit={(e) => {
        dispatch(actions.searchFetch(input));
        props.history.push(`/search/${input}`);
        e.target.elements.text.value = '';
      }}
    >
      <Input
        // className={classes.Input}
        name='text'
        autoComplete='off'
        placeholder='Search...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Form>
  );
};

export default withRouter(Search);
