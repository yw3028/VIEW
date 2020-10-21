import React from 'react';
import './MovieDetailStyle.js';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';
import ActionButtons from '../../Components/ActionButton/ActionButtons';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Theme from '../../Theme';

import * as S from './MovieDetailStyle';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      margin: 20,
      backgroundColor: 'white',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        backgroundColor: 'darkgray',
      },
    },
  },
}));

const MoviePage = (props) => {
  const classes = useStyles();

  // Use useEffect as good practice

  const movieId = props.match.params.id;
  const movieDetail = props.movies[movieId] || null; // Call hk, useEffect as good pracite and make async;

  return (
    <S.PageContainer primaryColor>
      <S.TopLeftIcon className={classes.root}>
        <IconButton aria-label="go back">
          <ArrowBackIcon onClick={props.history.goBack} />
        </IconButton>
      </S.TopLeftIcon>
      <S.MovieDetailsContainer>
        <MovieDetails movie={movieDetail} />
      </S.MovieDetailsContainer>
      <S.ActionButtonsPosition>
        <ActionButtons
          text={true}
          wish={true}
          movie={movieDetail}
          circular={true}
        ></ActionButtons>
        <ActionButtons
          text={true}
          watched={true}
          movie={movieDetail}
          circular={true}
        ></ActionButtons>
        <ActionButtons
          text={true}
          journal={true}
          movie={movieDetail}
          circular={true}
        ></ActionButtons>
      </S.ActionButtonsPosition>
    </S.PageContainer>
  );
};

export default MoviePage;
