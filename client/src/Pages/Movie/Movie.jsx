import React from 'react';
import './MovieStyle.js';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';
import ActionButtons from '../../Components/ActionButton/ActionButtons';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  S_PageContainer,
  S_TopLeftIcon,
  S_MovieDetailsContainer,
  S_ActionButtonsPosition,
} from './MovieStyle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: 20,
      backgroundColor: 'white',
    },
  },
}));

const MoviePage = () => {
  const classes = useStyles();

  return (
    <S_PageContainer>
      <S_TopLeftIcon className={classes.root}>
        <IconButton aria-label="go back">
          <ArrowBackIcon />
        </IconButton>
      </S_TopLeftIcon>
      <S_MovieDetailsContainer>
        <MovieDetails></MovieDetails>
      </S_MovieDetailsContainer>
      <S_ActionButtonsPosition>
        <ActionButtons
          text={true}
          wish={true}
          watched={true}
          journal={true}
        ></ActionButtons>
      </S_ActionButtonsPosition>
    </S_PageContainer>
  );
};

export default MoviePage;
