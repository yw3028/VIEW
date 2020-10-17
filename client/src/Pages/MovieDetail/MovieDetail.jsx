import React from 'react';
import './MovieDetailStyle.js';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';
import ActionButtons from '../../Components/ActionButton/ActionButtons';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import * as S from './MovieDetailStyle';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      margin: 20,
      backgroundColor: 'white',
    },
  },
}));

const MoviePage = (props) => {
  const classes = useStyles();

  const movieId = props.match.params.id;
  const movieDetail = props.movies[movieId];

  return (
    <S.PageContainer>
      <S.TopLeftIcon className={classes.root}>
        <IconButton aria-label="go back">
          <ArrowBackIcon />
        </IconButton>
      </S.TopLeftIcon>
      <S.MovieDetailsContainer>
        <MovieDetails movie={movieDetail} />
      </S.MovieDetailsContainer>
      <S.ActionButtonsPosition>
        <ActionButtons
          text={true}
          wish={true}
          watched={true}
          journal={true}
          movieId={movieId}
        ></ActionButtons>
      </S.ActionButtonsPosition>
    </S.PageContainer>
  );
};

export default MoviePage;
