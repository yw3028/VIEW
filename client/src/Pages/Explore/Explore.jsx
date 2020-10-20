import React, { useState, useContext } from 'react';

import Menu from '../../Components/Menu/index';
import MovieTile from '../../Components/MovieTile/MovieTile';
import Slider from '../../Components/Slider/Slider';
import { MovieContext } from '../../App';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moviedApi from '../../Services/moviedApiClient';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Explore = ({ searchMovies, setSearchMovies }) => {
  const handleChange = (event) => {
    const text = event.target.value;
    moviedApi
      .getMovieByTitle(text)
      .then((response) => setSearchMovies(response));
  };

  // const [searchMovies, setSearchMovies] = useState([]);

  const classes = useStyles();

  const { user, setIsAuth } = useContext(MovieContext);
  return (
    <>
      <Menu user={user} setIsAuth={setIsAuth} />
      <div>this is the explore</div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Search for a movie"
          onChange={handleChange}
        />
      </form>
      <Slider list={searchMovies} title={'Your Search'} />
    </>
  );
};

export default Explore;
