import React from 'react'
import classes from './Search.module.css';

const Search = () => {
  return (
    <form className={classes.Form}>
      <input className={classes.Input} name='text' placeholder='Search...'/>
    </form>
  )
}

export default Search;