import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Search.module.css';

const Search = (props) => {
  const [input,setInput] = useState('')
  return (
    <form
      className={classes.Form}
      onSubmit={(e) => {
        e.preventDefault();
        props.history.push(`/search/${input}`)
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
