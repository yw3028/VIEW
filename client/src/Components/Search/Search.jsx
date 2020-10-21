import React, { useState, useContext } from 'react';
import Slider from '../Slider/Slider';

import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import moviedApi from '../../Services/moviedApiClient';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid black',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifySelf: 'flex-end',
    margin: '0 1rem'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),

  },
}));

const Search = ({ searchMovies, setSearchMovies }) => {
  const handleChange = (event) => {
    const text = event.target.value;
    moviedApi
      .getMovieByTitle(text)
      .then((response) => setSearchMovies(response));
  };

  const classes = useStyles();

  return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      {/* <Slider list={searchMovies} /> */}
      </div>
  );
};

export default Search;
